"use client";

import type { YouTubeCommentData } from "@/lib/types";
import { formatNum } from "@/lib/utils";
import { useTheme } from "next-themes";

export function YouTubeCommentPreview({ data }: { data: YouTubeCommentData }) {
  const { resolvedTheme } = useTheme();
  const themes = {
    dark: { bg: "#0F0F0F", text: "#F1F1F1", secondary: "#AAAAAA", accent: "#3EA6FF" },
    light: { bg: "#FFFFFF", text: "#0F0F0F", secondary: "#606060", accent: "#065FD4" },
  };
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div
      className="w-[550px] rounded-lg overflow-hidden font-['Roboto','Arial',sans-serif] p-4"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {/* Pinned badge */}
      {data.isPinned && (
        <div className="flex items-center gap-1.5 mb-3 text-xs" style={{ color: t.secondary }}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
          </svg>
          Pinned by {data.channelName}
        </div>
      )}

      <div className="flex gap-3">
        {/* Avatar */}
        {data.avatarUrl ? (
          <img src={data.avatarUrl} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt="" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex-shrink-0 flex items-center justify-center text-white font-medium text-sm">
            {data.channelName.charAt(0)}
          </div>
        )}

        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium cursor-pointer" style={{ color: t.secondary }}>
              @{data.channelName}
            </span>
            {data.isVerified && (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.secondary }}>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
            <span className="text-xs" style={{ color: t.secondary }}>{data.timeAgo}</span>
          </div>

          {/* Comment text */}
          <p className="text-sm leading-[20px] mt-1 whitespace-pre-wrap">
            {data.comment}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-2">
            <button className="flex items-center gap-1 transition-colors" style={{ color: t.secondary }}>
              <svg className="w-6 h-6 p-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H1v11h16.67c1.54 0 2.87-1.07 3.2-2.57l1.25-5.67c.43-1.91-.85-3.76-2.35-3.76zM7 20H3v-7h4v7zm12.42-3.48l-1.25 5.67A1.34 1.34 0 0116.67 23H9v-9.58l5.38-5.88c.13-.14.3-.22.5-.22.37 0 .7.34.6.73L14 13h5.77c.71 0 1.32.87 1.15 1.52z"/>
              </svg>
              <span className="text-xs">{formatNum(data.likes)}</span>
            </button>
            <button className="transition-colors" style={{ color: t.secondary }}>
              <svg className="w-6 h-6 p-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 4h-1H6.57C5.5 4 4.59 4.67 4.38 5.61l-1.34 6C2.77 12.85 3.82 14 5.23 14h4.23l-1.52 4.94C7.62 19.97 8.46 21 9.62 21c.58 0 1.14-.24 1.52-.65L17 14h4V4h-4zm-1 8.42L10.62 18.3c-.13.14-.3.22-.5.22-.37 0-.7-.34-.6-.73L11 13H5.23c-.71 0-1.32-.87-1.15-1.52l1.34-6C5.54 5.2 5.82 5 6.14 5h9.86v7.42zM19 13h-2V5h2v8z"/>
              </svg>
            </button>
            <button className="text-xs font-medium ml-1 transition-colors" style={{ color: t.secondary }}>
              Reply
            </button>
          </div>

          {/* Creator heart */}
          {data.isHearted && (
            <div className="flex items-center gap-1.5 mt-2">
              <div className="relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center text-white text-[6px] font-bold">
                  {data.channelName.charAt(0)}
                </div>
                <svg className="w-3 h-3 text-red-500 absolute -bottom-0.5 -right-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-xs" style={{ color: t.secondary }}>❤ by {data.channelName}</span>
            </div>
          )}

          {/* Reply count */}
          {data.replyCount > 0 && (
            <button className="flex items-center gap-1 mt-2 text-sm font-medium px-2 py-1.5 rounded-full -ml-2 transition-colors" style={{ color: t.accent }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
              {data.replyCount} replies
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
