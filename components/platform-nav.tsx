"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import type { Platform, PlatformConfig } from "@/lib/types";
import { platformConfigs } from "@/lib/platforms";

interface PlatformNavProps {
  selected: Platform;
  onSelect: (p: Platform) => void;
}

const categoryLabels: Record<string, string> = {
  social: "Social",
  chat: "Chat",
  email: "Email",
};

function groupPlatforms(platforms: PlatformConfig[]) {
  const groups: { key: string; items: PlatformConfig[] }[] = [];
  const seen = new Set<string>();

  for (const p of platforms) {
    if (p.group) {
      if (!seen.has(p.group)) {
        seen.add(p.group);
        groups.push({
          key: p.group,
          items: platforms.filter((x) => x.group === p.group),
        });
      }
    } else {
      groups.push({ key: p.id, items: [p] });
    }
  }
  return groups;
}

export function PlatformNav({ selected, onSelect }: PlatformNavProps) {
  const categories = ["social", "chat", "email"] as const;

  return (
    <div className="flex flex-col items-center gap-1 py-3 px-1">
      {categories.map((cat, ci) => {
        const catPlatforms = platformConfigs.filter((p) => p.category === cat);
        const groups = groupPlatforms(catPlatforms);

        return (
          <div key={cat} className="flex flex-col items-center gap-1">
            {ci > 0 && <Separator className="my-1.5 w-8" />}
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground/50 mb-0.5">
              {categoryLabels[cat]}
            </span>
            {groups.map((group) => (
              <div
                key={group.key}
                className={
                  group.items.length > 1
                    ? "flex flex-col items-center gap-0.5 bg-accent/20 rounded-xl p-0.5"
                    : "flex flex-col items-center gap-0.5"
                }
              >
                {group.items.map((p) => {
                  const isSelected = selected === p.id;
                  return (
                    <Tooltip key={p.id}>
                      <TooltipTrigger asChild>
                        <motion.button
                          onClick={() => onSelect(p.id)}
                          className={`relative w-10 h-10 rounded-xl flex items-center justify-center text-sm transition-colors cursor-pointer ${
                            isSelected
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground/80"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="platform-bg"
                              className="absolute inset-0 bg-accent rounded-xl"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                          <span className="relative z-10 flex items-center justify-center">
                            {p.icon}
                          </span>
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={8}>
                        <p className="text-xs">{p.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
