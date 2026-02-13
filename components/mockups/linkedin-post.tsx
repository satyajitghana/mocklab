"use client";

import type { LinkedInPostData } from "@/lib/types";
import { formatNum } from "@/lib/utils";
import { useTheme } from "next-themes";

export function LinkedInPostPreview({ data }: { data: LinkedInPostData }) {
  const { resolvedTheme } = useTheme();
  const themes = {
    dark: { bg: "#1B1F23", text: "#FFFFFF", secondary: "#ACACAC", border: "#38434F" },
    light: { bg: "#FFFFFF", text: "#191919", secondary: "#666666", border: "#E0E0E0" },
  };
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  const totalReactions =
    data.likeCount +
    data.celebrateCount +
    data.supportCount +
    data.loveCount +
    data.insightfulCount +
    data.funnyCount;

  const reactionIcons: { key: string; count: number; bg: string; emoji: string }[] = [
    { key: "like", count: data.likeCount, bg: "#1877F2", emoji: "👍" },
    { key: "celebrate", count: data.celebrateCount, bg: "#44712E", emoji: "👏" },
    { key: "support", count: data.supportCount, bg: "#6B3FA0", emoji: "🫶" },
    { key: "love", count: data.loveCount, bg: "#DF704D", emoji: "❤️" },
    { key: "insightful", count: data.insightfulCount, bg: "#E9A53E", emoji: "💡" },
    { key: "funny", count: data.funnyCount, bg: "#D9822B", emoji: "😄" },
  ];
  const activeReactions = reactionIcons.filter((r) => r.count > 0);

  return (
    <div
      className="w-[555px] rounded-lg shadow-sm font-['-apple-system',system-ui,sans-serif]"
      style={{ backgroundColor: t.bg, color: t.text, border: `1px solid ${t.border}` }}
    >
      {/* Header */}
      <div className="p-3 pb-0">
        <div className="flex gap-2">
          {data.avatarUrl ? (
            <img src={data.avatarUrl} className="w-12 h-12 rounded-full object-cover flex-shrink-0" alt="" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex-shrink-0 flex items-center justify-center text-white font-bold">
              {data.name.charAt(0)}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm cursor-pointer">
                {data.name}
              </span>
              <span className="text-xs" style={{ color: t.secondary }}>• {data.connectionDegree}</span>
            </div>
            <p className="text-xs truncate" style={{ color: t.secondary }}>{data.headline}</p>
            <div className="flex items-center gap-1 text-xs" style={{ color: t.secondary }}>
              <span>{data.timeAgo}</span>
              <span>•</span>
              {data.isPromoted ? (
                <span className="font-medium">Promoted</span>
              ) : (
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm9.61 1.26a3.5 3.5 0 00-1.28-2.09A1.47 1.47 0 0010 6.62V6a1 1 0 00-1-1H8.5a.5.5 0 010-1h.75a.25.25 0 00.25-.25v-.5a.25.25 0 01.25-.25h.08a1 1 0 00.97-.77A5 5 0 0113 8c0 .45-.13.87-.39 1.26z"/>
                </svg>
              )}
            </div>
          </div>
          <button className="self-start rounded-full p-1" style={{ color: t.secondary }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0zM4 12a2 2 0 11-4 0 2 2 0 014 0zm16 0a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-3 text-sm leading-[1.42857] whitespace-pre-wrap">
        {data.content}
      </div>

      {/* Media */}
      {data.hasMedia && (
        <div className="w-full h-[312px] flex items-center justify-center" style={{ backgroundColor: resolvedTheme === "dark" ? "#2D3236" : "#f3f6f8" }}>
          {data.mediaUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={data.mediaUrl} alt="Media" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div className="text-center" style={{ color: t.secondary }}>
              <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
              <span className="text-xs">Media</span>
            </div>
          )}
        </div>
      )}

      {/* Reactions bar */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between text-xs" style={{ color: t.secondary }}>
          <div className="flex items-center gap-0.5">
            {/* Reaction icons */}
            <div className="flex -space-x-0.5">
              {activeReactions.slice(0, 3).map((r) => (
                <span
                  key={r.key}
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white"
                  style={{ backgroundColor: r.bg, border: `1px solid ${t.bg}` }}
                >
                  {r.emoji}
                </span>
              ))}
            </div>
            <span className="ml-1">{formatNum(totalReactions)}</span>
          </div>
          <div className="flex gap-2">
            <span>{formatNum(data.commentCount)} comments</span>
            <span>•</span>
            <span>{formatNum(data.repostCount)} reposts</span>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="px-2 py-1" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="flex justify-between">
          {[
            { label: "Like", icon: "M19.46 11l-3.91-3.91a7 7 0 01-9.1 0L2.54 11l.49.49a5.5 5.5 0 007.94 0l.53-.52.53.52a5.5 5.5 0 007.94 0z" },
            { label: "Comment", icon: "M7 9h10v1.5H7zm0 4h7v1.5H7z" },
            { label: "Repost", icon: "M13.96 5H6c-1.1 0-2 .9-2 2v5.04h2V7h7.96l-2.54 2.54L12.83 11 17 6.83 12.83 2.66 11.42 4.08zM10.04 19H18c1.1 0 2-.9 2-2v-5.04h-2V17h-7.96l2.54-2.54L11.17 13 7 17.17l4.17 4.17 1.41-1.41z" },
            { label: "Send", icon: "M21 3L0 10l7.66 4.26L21 3zm-7.44 11.6L21 3 7.44 14.6zm0 0V21l3.34-4.73z" },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 px-4 py-3 rounded text-xs font-semibold transition-colors"
              style={{ color: t.secondary }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
