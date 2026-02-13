"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { toPng } from "html-to-image";
import { Download, TestTubeDiagonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformNav } from "@/components/platform-nav";
import { EditorPanel } from "@/components/editor-panel";
import { PreviewPanel } from "@/components/preview-panel";
import { ThemeToggle } from "@/components/theme-toggle";
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
        if ("likes" in sample) newMsg.likes = 0;
        if ("timeAgo" in sample) newMsg.timeAgo = "just now";
        if ("isHearted" in sample) newMsg.isHearted = false;
        if ("isSnap" in sample) newMsg.isSnap = false;
        if ("content" in sample) newMsg.content = "New reply";
        if ("verified" in sample) newMsg.verified = false;
        if ("likeCount" in sample) newMsg.likeCount = 0;

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
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-card/50 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <TestTubeDiagonal className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight font-mono">
              MockLab
            </h1>
            <p className="text-[10px] text-muted-foreground leading-none">
              Social Media Mockup Generator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {currentConfig && (
            <div className="hidden sm:flex items-center text-sm text-muted-foreground">
              <span className="mr-1.5 flex items-center">{currentConfig.icon}</span>
              <span className="font-medium text-foreground">
                {currentConfig.name}
              </span>
            </div>
          )}
          <ThemeToggle />
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            size="sm"
            variant="outline"
            className="gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            {isDownloading ? "Exporting..." : "Download"}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Platform nav (left sidebar) — always visible */}
        <aside className="w-[220px] border-r border-border/50 bg-card/30 backdrop-blur-xl overflow-hidden flex-shrink-0">
          <PlatformNav selected={platform} onSelect={setPlatform} />
        </aside>

        {/* Editor panel */}
        <aside className="w-[340px] border-r border-border/50 bg-card/30 backdrop-blur-xl flex-shrink-0 overflow-hidden">
          <EditorPanel
            platform={platform}
            data={currentData}
            onChange={updateField}
            onUpdateMessage={updateMessage}
            onAddMessage={addMessage}
            onRemoveMessage={removeMessage}
          />
        </aside>

        {/* Preview panel */}
        <motion.main
          className="flex-1 bg-muted/30 overflow-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <PreviewPanel ref={previewRef} platform={platform} data={data} />
        </motion.main>
      </div>
    </div>
  );
}
