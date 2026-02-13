"use client";

import { formatNum } from "@/lib/utils";
import type { TikTokPostData } from "@/lib/types";

const themes = {
  dark: { bg: "#000000", text: "#FFFFFF", secondary: "#FFFFFFB3", overlay: "rgba(0,0,0,0.4)" },
  light: { bg: "#FFFFFF", text: "#161823", secondary: "#161823B3", overlay: "rgba(255,255,255,0.4)" },
};

export function TikTokPostPreview({ data }: { data: TikTokPostData }) {
  const t = themes[data.theme] || themes.dark;

  return (
    <div
      className="w-[360px] h-[640px] rounded-2xl overflow-hidden relative font-['TikTokFont','ProximaNova','Arial',sans-serif]"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {/* Video area / background */}
      <div className="absolute inset-0">
        {data.hasMedia && data.mediaUrl ? (
          <img
            src={data.mediaUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
            }}
          />
        )}
      </div>

      {/* Right sidebar actions */}
      <div className="absolute right-3 bottom-[160px] flex flex-col items-center gap-5 z-10">
        {/* Profile avatar */}
        <div className="relative mb-2">
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #FE2C55, #25F4EE)" }}
          >
            {data.username.charAt(0).toUpperCase()}
          </div>
          <div
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#FE2C55" }}
          >
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        </div>

        {/* Heart / Likes */}
        <div className="flex flex-col items-center gap-1">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-white text-xs font-semibold">{formatNum(data.likes)}</span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center gap-1">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
          </svg>
          <span className="text-white text-xs font-semibold">{formatNum(data.comments)}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-1">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
          <span className="text-white text-xs font-semibold">{formatNum(data.shares)}</span>
        </div>

        {/* Bookmark */}
        <div className="flex flex-col items-center gap-1">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="text-white text-xs font-semibold">{formatNum(data.bookmarks)}</span>
        </div>

        {/* Music disc */}
        <div className="w-[36px] h-[36px] rounded-full border-2 border-[#3a3a3a] bg-gradient-to-br from-[#333] to-[#1a1a1a] flex items-center justify-center mt-1">
          <div className="w-3 h-3 rounded-full bg-[#FE2C55]" />
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-[60px] p-4 z-10" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}>
        {/* Username */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-white font-bold text-[15px]">@{data.username}</span>
          {data.verified && (
            <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#20D5EC" />
              <path d="M21.5 35L10 23.5L14.5 19L21.5 26L35 12.5L39.5 17L21.5 35Z" fill="white" />
            </svg>
          )}
        </div>

        {/* Caption */}
        <p className="text-white text-[13px] leading-[18px] mb-3" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {data.caption}
        </p>

        {/* Music ticker */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <div className="overflow-hidden">
            <span className="text-white text-[13px] whitespace-nowrap">
              ♪ {data.musicName} - {data.musicAuthor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
