"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { toPng } from "html-to-image";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformNav } from "@/components/platform-nav";
import { EditorPanel } from "@/components/editor-panel";
import { PreviewPanel } from "@/components/preview-panel";
import { platformMap } from "@/lib/platforms";
import { defaults } from "@/lib/defaults";
import type { Platform, AllPlatformData } from "@/lib/types";

export default function Home() {
  const [platform, setPlatform] = useState<Platform>("x-post");
  const [data, setData] = useState<AllPlatformData>(() => structuredClone(defaults));
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const currentConfig = platformMap.get(platform);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentData = data[platform] as any as Record<string, unknown>;

  const updateField = useCallback(
    (key: string, value: unknown) => {
      setData((prev) => ({
        ...prev,
        [platform]: { ...prev[platform], [key]: value },
      }));
    },
    [platform]
  );

  const updateMessage = useCallback(
    (messagesKey: string, index: number, field: string, value: unknown) => {
      setData((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const platformData = prev[platform] as any;
        const messages = [...(platformData[messagesKey] as Record<string, unknown>[])];
        messages[index] = { ...messages[index], [field]: value };
        return {
          ...prev,
          [platform]: { ...platformData, [messagesKey]: messages },
        };
      });
    },
    [platform]
  );

  const addMessage = useCallback(
    (messagesKey: string) => {
      setData((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const platformData = prev[platform] as any;
        const messages = [...(platformData[messagesKey] as Record<string, unknown>[])];
        const id = String(Date.now());

        // Determine what fields to include based on existing messages
        const sample = messages[0] || {};
        const newMsg: Record<string, unknown> = { id, text: "New message" };
        if ("sent" in sample) newMsg.sent = true;
        if ("isMe" in sample) newMsg.isMe = true;
        if ("time" in sample) newMsg.time = "12:00 PM";
        if ("status" in sample) newMsg.status = "delivered";
        if ("sender" in sample) newMsg.sender = "You";
        if ("senderColor" in sample) newMsg.senderColor = "#7C3AED";
        if ("username" in sample) newMsg.username = "user";
        if ("roleColor" in sample) newMsg.roleColor = "#F2F3F5";
        if ("isBot" in sample) newMsg.isBot = false;
        if ("reactions" in sample) newMsg.reactions = [];

        messages.push(newMsg);
        return {
          ...prev,
          [platform]: { ...platformData, [messagesKey]: messages },
        };
      });
    },
    [platform]
  );

  const removeMessage = useCallback(
    (messagesKey: string, index: number) => {
      setData((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const platformData = prev[platform] as any;
        const messages = [...(platformData[messagesKey] as Record<string, unknown>[])];
        messages.splice(index, 1);
        return {
          ...prev,
          [platform]: { ...platformData, [messagesKey]: messages },
        };
      });
    },
    [platform]
  );

  const handleDownload = useCallback(async () => {
    if (!previewRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `mocklab-${platform}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setIsDownloading(false);
    }
  }, [platform]);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top bar */}
      <motion.header
        className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-card/50 backdrop-blur-xl z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">MockLab</h1>
            <p className="text-[10px] text-muted-foreground leading-none">
              Fake Post Generator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {currentConfig && (
            <motion.div
              key={platform}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-muted-foreground"
            >
              <span className="mr-1.5">{currentConfig.icon}</span>
              <span className="font-medium text-foreground">
                {currentConfig.name}
              </span>
            </motion.div>
          )}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="sm"
              className="gap-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/25"
            >
              <Download className="w-3.5 h-3.5" />
              {isDownloading ? "Exporting..." : "Download PNG"}
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Platform nav (left sidebar) */}
        <motion.aside
          className="w-14 border-r border-border/50 bg-card/30 backdrop-blur-xl overflow-y-auto custom-scrollbar flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <PlatformNav selected={platform} onSelect={setPlatform} />
        </motion.aside>

        {/* Editor panel */}
        <motion.aside
          className="w-[340px] border-r border-border/50 bg-card/30 backdrop-blur-xl flex-shrink-0 overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          <EditorPanel
            platform={platform}
            data={currentData}
            onChange={updateField}
            onUpdateMessage={updateMessage}
            onAddMessage={addMessage}
            onRemoveMessage={removeMessage}
          />
        </motion.aside>

        {/* Preview panel */}
        <motion.main
          className="flex-1 bg-[#0a0a0a] overflow-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          <PreviewPanel ref={previewRef} platform={platform} data={data} />
        </motion.main>
      </div>
    </div>
  );
}
