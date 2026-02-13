"use client";

import type { TikTokCommentData } from "@/lib/types";
import { formatNum } from "@/lib/utils";

export function TikTokCommentPreview({ data }: { data: TikTokCommentData }) {
  const themes = {
    dark: { bg: "#121212", text: "#FFFFFF", secondary: "#8A8B91", comment: "#E8E8E8" },
    light: { bg: "#FFFFFF", text: "#161823", secondary: "#8A8B91", comment: "#161823" },
  };
  const t = themes[data.theme] || themes.dark;

  return (
    <div
      className="w-[420px] rounded-xl overflow-hidden font-['TikTokFont','ProximaNova','Arial',sans-serif] p-4"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {/* Pinned badge */}
      {data.isPinned && (
        <div className="flex items-center gap-1.5 mb-3 text-xs" style={{ color: t.secondary }}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
          </svg>
          Pinned
        </div>
      )}

      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FE2C55] to-[#25F4EE] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
          {data.username.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">
          {/* Username */}
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm">{data.username}</span>
            {data.verified && (
              <svg className="w-3.5 h-3.5" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#20D5EC"/>
                <path d="M21.5 35L10 23.5L14.5 19L21.5 26L35 12.5L39.5 17L21.5 35Z" fill="white"/>
              </svg>
            )}
          </div>

          {/* Comment text */}
          <p className="text-sm leading-[20px] mt-1" style={{ color: t.comment }}>
            {data.comment}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-3 mt-2 text-xs" style={{ color: t.secondary }}>
            <span>{data.timeAgo}</span>
            <button className="transition-colors">Reply</button>
          </div>

          {/* Creator liked */}
          {data.isCreatorLiked && (
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-4 h-4 rounded-full bg-[#FE2C55] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-xs text-[#FE2C55]">Liked by creator</span>
            </div>
          )}

          {/* View replies */}
          {data.replyCount > 0 && (
            <button className="text-xs mt-2 flex items-center gap-1 transition-colors" style={{ color: t.secondary }}>
              <div className="w-6 h-[1px]" style={{ backgroundColor: t.secondary }} />
              View {data.replyCount} replies
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
          )}
        </div>

        {/* Like button */}
        <div className="flex flex-col items-center gap-0.5 pt-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: t.secondary }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span className="text-[10px]" style={{ color: t.secondary }}>{formatNum(data.likes)}</span>
        </div>
      </div>
    </div>
  );
}
