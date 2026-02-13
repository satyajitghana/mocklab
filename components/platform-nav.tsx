"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Platform, PlatformConfig } from "@/lib/types";
import { platformConfigs } from "@/lib/platforms";

interface PlatformNavProps {
  selected: Platform;
  onSelect: (p: Platform) => void;
}

interface NavGroup {
  key: string;
  label: string;
  icon: React.ReactNode;
  items: { id: Platform; label: string }[];
}

function buildGroups(platforms: PlatformConfig[]): NavGroup[] {
  const groups: NavGroup[] = [];
  const seen = new Set<string>();

  for (const p of platforms) {
    if (p.group) {
      if (!seen.has(p.group)) {
        seen.add(p.group);
        const groupItems = platforms.filter((x) => x.group === p.group);
        groups.push({
          key: p.group,
          label: p.group,
          icon: p.icon,
          items: groupItems.map((gi) => ({
            id: gi.id,
            label: gi.name.replace(`${p.group!} `, "").replace(p.group!, "Post"),
          })),
        });
      }
    } else {
      groups.push({
        key: p.id,
        label: p.name,
        icon: p.icon,
        items: [{ id: p.id, label: p.name }],
      });
    }
  }
  return groups;
}

export function PlatformNav({ selected, onSelect }: PlatformNavProps) {
  const groups = buildGroups(platformConfigs);
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    for (const g of groups) {
      if (g.items.length > 1 && g.items.some((i) => i.id === selected)) {
        initial.add(g.key);
      }
    }
    return initial;
  });

  const toggleGroup = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <ScrollArea className="h-full">
      <div className="py-3 px-2 space-y-0.5">
        {groups.map((group) => {
          const isSingle = group.items.length === 1;
          const isExpanded = expanded.has(group.key);
          const isGroupActive = group.items.some((i) => i.id === selected);

          if (isSingle) {
            const item = group.items[0];
            const isSelected = selected === item.id;
            return (
              <button
                key={group.key}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-accent text-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                <span className="flex items-center justify-center w-5 h-5 shrink-0">
                  {group.icon}
                </span>
                <span className="truncate">{group.label}</span>
              </button>
            );
          }

          return (
            <div key={group.key}>
              <button
                onClick={() => toggleGroup(group.key)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                  isGroupActive && !isExpanded
                    ? "bg-accent/50 text-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                <span className="flex items-center justify-center w-5 h-5 shrink-0">
                  {group.icon}
                </span>
                <span className="truncate flex-1 text-left">{group.label}</span>
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-50" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-50" />
                )}
              </button>
              {isExpanded && (
                <div className="ml-5 mt-0.5 space-y-0.5 border-l border-border/50 pl-2.5">
                  {group.items.map((item) => {
                    const isSelected = selected === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`w-full text-left px-2.5 py-1 rounded-md text-sm transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
