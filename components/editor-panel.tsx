"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Trash2, ImageIcon } from "lucide-react";
import type { Platform, EditorSection, EditorField } from "@/lib/types";
import { platformMap } from "@/lib/platforms";

const COLOR_PRESETS = [
  "#000000", "#FFFFFF", "#F5F5F5", "#6B7280", "#EF4444", "#F97316",
  "#F59E0B", "#EAB308", "#84CC16", "#22C55E", "#14B8A6", "#06B6D4",
  "#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#D946EF", "#EC4899",
  "#075E54", "#25D366", "#1DA1F2", "#6C5CE7",
];

interface EditorPanelProps {
  platform: Platform;
  data: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
  onUpdateMessage: (
    messagesKey: string,
    index: number,
    field: string,
    value: unknown
  ) => void;
  onAddMessage: (messagesKey: string) => void;
  onRemoveMessage: (messagesKey: string, index: number) => void;
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function renderField(
  field: EditorField,
  data: Record<string, unknown>,
  onChange: (key: string, value: unknown) => void,
  onUpdateMessage: (
    messagesKey: string,
    index: number,
    field: string,
    value: unknown
  ) => void,
  onAddMessage: (messagesKey: string) => void,
  onRemoveMessage: (messagesKey: string, index: number) => void
) {
  const value = data[field.key];

  switch (field.type) {
    case "text":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Input
            value={(value as string) ?? ""}
            onChange={(e) => onChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="h-8 text-sm bg-background/50"
          />
        </div>
      );

    case "textarea":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Textarea
            value={(value as string) ?? ""}
            onChange={(e) => onChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className="min-h-[80px] text-sm bg-background/50 resize-none"
          />
        </div>
      );

    case "number":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label}
            <span className="ml-2 text-foreground/40 font-mono">
              {formatNumber(value as number)}
            </span>
          </Label>
          <Input
            type="number"
            value={(value as number) ?? 0}
            onChange={(e) => onChange(field.key, Number(e.target.value))}
            min={field.min}
            max={field.max}
            className="h-8 text-sm bg-background/50"
          />
        </div>
      );

    case "switch":
      return (
        <div
          key={field.key}
          className="flex items-center justify-between py-1"
        >
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Switch
            checked={(value as boolean) ?? false}
            onCheckedChange={(v) => onChange(field.key, v)}
          />
        </div>
      );

    case "select":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <Select
            value={(value as string) ?? ""}
            onValueChange={(v) => onChange(field.key, v)}
          >
            <SelectTrigger className="h-8 text-sm bg-background/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );

    case "slider":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            {field.label}
            <span className="ml-2 text-foreground/40 font-mono">
              {value as number}%
            </span>
          </Label>
          <input
            type="range"
            min={field.min ?? 0}
            max={field.max ?? 100}
            step={field.step ?? 1}
            value={(value as number) ?? 0}
            onChange={(e) => onChange(field.key, Number(e.target.value))}
            className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      );

    case "color":
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          <div className="flex gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="w-8 h-8 rounded-md border border-border cursor-pointer shrink-0 transition-shadow hover:ring-2 hover:ring-ring"
                  style={{ backgroundColor: (value as string) ?? "#000000" }}
                />
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3" align="start">
                <div className="grid grid-cols-6 gap-1.5 mb-2">
                  {COLOR_PRESETS.map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-md border cursor-pointer transition-transform hover:scale-110 ${
                        (value as string) === color
                          ? "ring-2 ring-ring ring-offset-1"
                          : "border-border/50"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onChange(field.key, color)}
                    />
                  ))}
                </div>
                <Input
                  value={(value as string) ?? ""}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  placeholder="#000000"
                  className="h-7 text-xs font-mono"
                />
              </PopoverContent>
            </Popover>
            <Input
              value={(value as string) ?? ""}
              onChange={(e) => onChange(field.key, e.target.value)}
              className="h-8 text-sm bg-background/50 font-mono"
            />
          </div>
        </div>
      );

    case "image": {
      const imageValue = value as string;
      return (
        <div key={field.key} className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">{field.label}</Label>
          {imageValue && (
            <div className="relative rounded-md overflow-hidden border border-border/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageValue} alt="Upload preview" className="w-full h-32 object-cover" />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-1 right-1 h-6 w-6 p-0 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => onChange(field.key, "")}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          )}
          <label className="flex items-center gap-2 h-8 px-3 rounded-md border border-border/50 bg-background/50 cursor-pointer hover:bg-accent/50 transition-colors text-sm text-muted-foreground">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{imageValue ? "Change image" : "Choose image"}</span>
            <input
              type="file"
              accept={field.accept || "image/*"}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => onChange(field.key, reader.result as string);
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>
        </div>
      );
    }

    case "messages": {
      const messages = (value as Record<string, unknown>[]) ?? [];
      const mf = field.messageFields!;
      return (
        <div key={field.key} className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">
              {field.label} ({messages.length})
            </Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs"
              onClick={() => onAddMessage(field.key)}
            >
              <Plus className="w-3 h-3 mr-1" /> Add
            </Button>
          </div>
          <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id as string}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border border-border/50 rounded-lg p-2.5 space-y-2 bg-background/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      #{i + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 text-destructive/70 hover:text-destructive"
                      onClick={() => onRemoveMessage(field.key, i)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                  {mf.senderKey && (
                    <Input
                      value={(msg[mf.senderKey] as string) ?? ""}
                      onChange={(e) =>
                        onUpdateMessage(field.key, i, mf.senderKey!, e.target.value)
                      }
                      placeholder="Sender"
                      className="h-7 text-xs bg-background/50"
                    />
                  )}
                  <Textarea
                    value={(msg[mf.textKey] as string) ?? ""}
                    onChange={(e) =>
                      onUpdateMessage(field.key, i, mf.textKey, e.target.value)
                    }
                    placeholder="Message text"
                    className="min-h-[40px] text-xs bg-background/50 resize-none"
                  />
                  <div className="flex gap-2 flex-wrap">
                    <Input
                      value={(msg[mf.timeKey] as string) ?? ""}
                      onChange={(e) =>
                        onUpdateMessage(field.key, i, mf.timeKey, e.target.value)
                      }
                      placeholder="Time"
                      className="h-7 text-xs bg-background/50 flex-1 min-w-[80px]"
                    />
                    {mf.sentKey && (
                      <div className="flex items-center gap-1.5">
                        <Label className="text-[10px] text-muted-foreground">Sent</Label>
                        <Switch
                          checked={(msg[mf.sentKey] as boolean) ?? false}
                          onCheckedChange={(v) =>
                            onUpdateMessage(field.key, i, mf.sentKey!, v)
                          }
                        />
                      </div>
                    )}
                    {mf.isMeKey && (
                      <div className="flex items-center gap-1.5">
                        <Label className="text-[10px] text-muted-foreground">Me</Label>
                        <Switch
                          checked={(msg[mf.isMeKey] as boolean) ?? false}
                          onCheckedChange={(v) =>
                            onUpdateMessage(field.key, i, mf.isMeKey!, v)
                          }
                        />
                      </div>
                    )}
                    {mf.isSnapKey && (
                      <div className="flex items-center gap-1.5">
                        <Label className="text-[10px] text-muted-foreground">Snap</Label>
                        <Switch
                          checked={(msg[mf.isSnapKey] as boolean) ?? false}
                          onCheckedChange={(v) =>
                            onUpdateMessage(field.key, i, mf.isSnapKey!, v)
                          }
                        />
                      </div>
                    )}
                  </div>
                  {mf.likesKey && (
                    <div className="flex items-center gap-1.5">
                      <Label className="text-[10px] text-muted-foreground">Likes</Label>
                      <Input
                        type="number"
                        value={(msg[mf.likesKey] as number) ?? 0}
                        onChange={(e) =>
                          onUpdateMessage(field.key, i, mf.likesKey!, Number(e.target.value))
                        }
                        className="h-7 text-xs bg-background/50 w-24"
                        min={0}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}

export function EditorPanel({
  platform,
  data,
  onChange,
  onUpdateMessage,
  onAddMessage,
  onRemoveMessage,
}: EditorPanelProps) {
  const config = platformMap.get(platform);
  if (!config) return null;

  return (
    <ScrollArea className="h-full custom-scrollbar">
      <div className="p-4 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={platform}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {config.sections.map((section: EditorSection, si: number) => (
              <div key={si} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {section.title}
                  </h3>
                  <Separator className="flex-1" />
                </div>
                <div className="space-y-3">
                  {section.fields.map((field) =>
                    renderField(
                      field,
                      data as Record<string, unknown>,
                      onChange,
                      onUpdateMessage,
                      onAddMessage,
                      onRemoveMessage
                    )
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
}
