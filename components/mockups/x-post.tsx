"use client";

import { useTheme } from "next-themes";
import { MessageCircle, Repeat2, Heart, Bookmark, Share, BarChart2 } from "lucide-react";
import type { XPostData } from "@/lib/types";
import { formatNum } from "@/lib/utils";

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
  const { resolvedTheme } = useTheme();
  const themes = {
    dark: { bg: "#000000", text: "#E7E9EA", secondary: "#71767B", border: "#2F3336", hover: "#181818" },
    light: { bg: "#FFFFFF", text: "#0F1419", secondary: "#536471", border: "#EFF3F4", hover: "#F7F7F7" },
  };
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

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
          {data.avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={data.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
              {data.displayName.charAt(0)}
            </div>
          )}
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

        {/* Media */}
        {data.hasMedia && (
          <div
            className="mt-3 rounded-2xl overflow-hidden h-[280px] flex items-center justify-center"
            style={{ border: `1px solid ${t.border}`, backgroundColor: t.hover }}
          >
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

        {/* Timestamp + Client */}
        <div className="mt-3 text-[13px] flex items-center gap-1" style={{ color: t.secondary }}>
          <span>{data.timestamp}</span>
          {data.showClient && data.client && (
            <>
              <span>·</span>
              <span>{data.client}</span>
            </>
          )}
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
          <div className="flex items-center gap-1.5 cursor-pointer" style={{ color: t.secondary }}>
            <MessageCircle className="w-[18px] h-[18px]" />
            <span className="text-[13px]">{formatNum(data.replies)}</span>
          </div>
          {/* Repost */}
          <div className="flex items-center gap-1.5 cursor-pointer" style={{ color: t.secondary }}>
            <Repeat2 className="w-[18px] h-[18px]" />
            <span className="text-[13px]">{formatNum(data.retweets)}</span>
          </div>
          {/* Like */}
          <div className="flex items-center gap-1.5 cursor-pointer" style={{ color: t.secondary }}>
            <Heart className="w-[18px] h-[18px]" />
            <span className="text-[13px]">{formatNum(data.likes)}</span>
          </div>
          {/* Views */}
          <div className="flex items-center gap-1.5 cursor-pointer" style={{ color: t.secondary }}>
            <BarChart2 className="w-[18px] h-[18px]" />
            <span className="text-[13px]">{formatNum(data.views)}</span>
          </div>
          {/* Bookmark */}
          <div className="flex items-center gap-1.5 cursor-pointer" style={{ color: t.secondary }}>
            <Bookmark className="w-[18px] h-[18px]" />
            <span className="text-[13px]">{formatNum(data.bookmarks)}</span>
          </div>
          {/* Share */}
          <div className="cursor-pointer" style={{ color: t.secondary }}>
            <Share className="w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
