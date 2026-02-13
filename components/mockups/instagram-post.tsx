"use client";

import type { InstagramPostData } from "@/lib/types";
import { formatNum } from "@/lib/utils";

export function InstagramPostPreview({ data }: { data: InstagramPostData }) {
  const themes = {
    dark: { bg: "#000", text: "#F5F5F5", secondary: "#A8A8A8", border: "#262626" },
    light: { bg: "#FFF", text: "#262626", secondary: "#8E8E8E", border: "#DBDBDB" },
  };
  const t = themes[data.theme] || themes.dark;

  return (
    <div
      className="w-[470px] font-['system-ui','-apple-system','Segoe_UI',sans-serif]"
      style={{ backgroundColor: t.bg, color: t.text, border: `1px solid ${t.border}` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#C13584] p-[2px]">
          <div className="w-full h-full rounded-full flex items-center justify-center text-[10px] font-semibold text-white" style={{ backgroundColor: t.bg }}>
            {data.username.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">{data.username}</span>
            {data.verified && (
              <svg className="w-3 h-3 text-[#0095F6]" viewBox="0 0 40 40" fill="currentColor">
                <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.641l-5.436-3.137V5.15h-6.234L25.358 0l-5.36 3.094zM18.34 29.636l-8.45-8.45 3.149-3.15 5.293 5.295 9.24-9.24 3.15 3.15-12.382 12.395z"/>
              </svg>
            )}
          </div>
          {data.location && (
            <span className="text-xs" style={{ color: t.secondary }}>{data.location}</span>
          )}
        </div>
        <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </svg>
      </div>

      {/* Image area */}
      <div className="w-full aspect-square flex items-center justify-center" style={{ backgroundColor: data.theme === "dark" ? "#1a1a1a" : "#EFEFEF" }}>
        {data.mediaUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={data.mediaUrl} alt="Media" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div className="text-center" style={{ color: t.secondary }}>
            <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
            </svg>
            <span className="text-xs">Photo</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4" style={{ color: t.text }}>
            {/* Heart */}
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            {/* Comment */}
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            {/* Share */}
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </div>
          {/* Bookmark */}
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: t.text }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
          </svg>
        </div>
      </div>

      {/* Likes */}
      <div className="px-4 pt-2">
        {data.likedByUser ? (
          <p className="text-sm">
            Liked by <span className="font-semibold">{data.likedByUser}</span> and{" "}
            <span className="font-semibold">{formatNum(data.likeCount)} others</span>
          </p>
        ) : (
          <p className="text-sm font-semibold">{formatNum(data.likeCount)} likes</p>
        )}
      </div>

      {/* Caption */}
      <div className="px-4 pt-1">
        <p className="text-sm">
          <span className="font-semibold mr-1">{data.username}</span>
          {data.caption}
        </p>
      </div>

      {/* Comments */}
      {data.commentCount > 0 && (
        <div className="px-4 pt-1">
          <p className="text-sm cursor-pointer" style={{ color: t.secondary }}>
            View all {formatNum(data.commentCount)} comments
          </p>
        </div>
      )}

      {/* Time */}
      <div className="px-4 py-3">
        <p className="text-[10px] uppercase" style={{ color: t.secondary }}>{data.timeAgo}</p>
      </div>
    </div>
  );
}
