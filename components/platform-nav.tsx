"use client";

import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import type { Platform } from "@/lib/types";
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

export function PlatformNav({ selected, onSelect }: PlatformNavProps) {
  const categories = ["social", "chat", "email"] as const;

  return (
    <div className="flex flex-col items-center gap-1 py-3 px-1">
      {categories.map((cat, ci) => (
        <div key={cat} className="flex flex-col items-center gap-1">
          {ci > 0 && <Separator className="my-1.5 w-8" />}
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground/50 mb-0.5">
            {categoryLabels[cat]}
          </span>
          {platformConfigs
            .filter((p) => p.category === cat)
            .map((p) => {
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
                      <span className="relative z-10 text-base leading-none">
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
}
