"use client";

import type { XPostData } from "@/lib/types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function VerifiedBadge({ type }: { type: string }) {
  if (type === "none") return null;
  const colors: Record<string, string> = {
    blue: "#1D9BF0",
    gold: "#E8A50C",
    grey: "#829AAB",
  };
  return (
    <svg viewBox="0 0 22 22" className="w-[18px] h-[18px] ml-0.5 inline-block align-middle">
      <path
        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.855-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.636-.08 1.297.144 1.907-.577.27-1.065.696-1.415 1.233-.35.537-.544 1.16-.562 1.8.018.647.213 1.276.562 1.817.35.54.838.967 1.415 1.237-.224.61-.274 1.27-.144 1.907.13.635.433 1.22.878 1.69.47.443 1.055.747 1.69.878.635.13 1.294.079 1.902-.144.271.587.7 1.086 1.24 1.44s1.167.551 1.813.568c.647-.017 1.275-.213 1.817-.567.541-.355.97-.854 1.245-1.44.604.222 1.26.271 1.893.14.634-.131 1.22-.436 1.69-.881.445-.47.75-1.055.88-1.69.131-.637.08-1.3-.143-1.91.58-.27 1.065-.697 1.415-1.237.35-.54.545-1.163.563-1.81z"
        fill={colors[type] || colors.blue}
      />
      <path
        d="M9.585 14.929l-3.28-3.28 1.168-1.168 2.112 2.112 5.036-5.036 1.168 1.168z"
        fill="white"
      />
    </svg>
  );
}

export function XPostPreview({ data }: { data: XPostData }) {
  const themes = {
    dark: { bg: "#000000", text: "#E7E9EA", secondary: "#71767B", border: "#2F3336", hover: "#181818" },
    dim: { bg: "#15202B", text: "#F7F9F9", secondary: "#8B98A5", border: "#38444D", hover: "#1C2C3C" },
    light: { bg: "#FFFFFF", text: "#0F1419", secondary: "#536471", border: "#EFF3F4", hover: "#F7F7F7" },
  };
  const t = themes[data.theme] || themes.dark;

  return (
    <div
      className="w-[598px] font-['Chirp',system-ui,-apple-system,sans-serif]"
      style={{ backgroundColor: t.bg, color: t.text }}
    >
      {/* Post */}
      <div className="px-4 pt-3 pb-1" style={{ borderBottom: `1px solid ${t.border}` }}>
        {/* Header */}
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
            {data.displayName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            {/* Name row */}
            <div className="flex items-center gap-1">
              <span className="font-bold text-[15px] truncate">{data.displayName}</span>
              <VerifiedBadge type={data.verified} />
            </div>
            <div className="text-[15px]" style={{ color: t.secondary }}>
              @{data.handle}
            </div>
          </div>
          {/* More icon */}
          <div className="ml-auto" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="mt-3 text-[15px] leading-[20px] whitespace-pre-wrap">
          {data.content}
        </div>

        {/* Media placeholder */}
        {data.hasMedia && (
          <div
            className="mt-3 rounded-2xl overflow-hidden h-[280px] flex items-center justify-center"
            style={{ border: `1px solid ${t.border}`, backgroundColor: t.hover }}
          >
            <div className="text-center" style={{ color: t.secondary }}>
              <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
              <span className="text-xs">Media</span>
            </div>
          </div>
        )}

        {/* Timestamp */}
        <div className="mt-3 text-[13px] flex items-center gap-1" style={{ color: t.secondary }}>
          <span>{data.timestamp}</span>
          <span>·</span>
          <span className="font-bold" style={{ color: t.text }}>{formatNum(data.views)}</span>
          <span>Views</span>
        </div>

        {/* Engagement bar */}
        <div
          className="flex items-center justify-between mt-3 py-3"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          {/* Reply */}
          <div className="flex items-center gap-1.5 group cursor-pointer" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.25-.893 4.34-2.457 5.86-1.276 1.24-1.903 2.99-1.794 4.76v.01c.01.19-.14.35-.33.36h-.05c-4.67-.08-8.22-1.85-10.28-3.85C4.39 14.34 1.75 12.32 1.75 10zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 1.46 1.69 3.13 4.06 5.09.68.56 1.43 1.16 2.17 1.83 1.5 1.34 3.81 2.56 6.73 2.95-.06-2.09.72-4.15 2.24-5.63 1.25-1.21 1.96-2.88 1.96-4.61 0-3.39-2.74-6.13-6.13-6.13H9.756z"/>
            </svg>
            <span className="text-[13px]">{formatNum(data.replies)}</span>
          </div>
          {/* Retweet */}
          <div className="flex items-center gap-1.5 group cursor-pointer" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
            </svg>
            <span className="text-[13px]">{formatNum(data.retweets)}</span>
          </div>
          {/* Like */}
          <div className="flex items-center gap-1.5 group cursor-pointer" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
              <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.56-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.7-.514-6.67.89-1.93 2.7-3.18 4.72-3.29 1.68-.09 3.35.59 4.68 2.1 1.33-1.51 3-2.19 4.68-2.1 2.02.11 3.83 1.36 4.72 3.29.9 1.97.85 4.17-.516 6.67z"/>
            </svg>
            <span className="text-[13px]">{formatNum(data.likes)}</span>
          </div>
          {/* Bookmark */}
          <div className="flex items-center gap-1.5 group cursor-pointer" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
              <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
            </svg>
            <span className="text-[13px]">{formatNum(data.bookmarks)}</span>
          </div>
          {/* Share */}
          <div className="cursor-pointer" style={{ color: t.secondary }}>
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
              <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
