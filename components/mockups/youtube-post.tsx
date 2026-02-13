"use client";

import { formatNum } from "@/lib/utils";
import type { YouTubePostData, YouTubeComment } from "@/lib/types";
import { useTheme } from "next-themes";

const themes = {
  dark: {
    bg: "#0F0F0F",
    text: "#F1F1F1",
    secondary: "#AAAAAA",
    border: "#272727",
    hover: "#272727",
    chip: "#272727",
    chipText: "#F1F1F1",
    descBg: "#272727",
    commentHover: "#272727",
  },
  light: {
    bg: "#FFFFFF",
    text: "#0F0F0F",
    secondary: "#606060",
    border: "#E5E5E5",
    hover: "#F2F2F2",
    chip: "#F2F2F2",
    chipText: "#0F0F0F",
    descBg: "#F2F2F2",
    commentHover: "#F2F2F2",
  },
};

export function YouTubePostPreview({ data }: { data: YouTubePostData }) {
  const { resolvedTheme } = useTheme();
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div
      className="w-[580px] overflow-hidden"
      style={{
        backgroundColor: t.bg,
        color: t.text,
        fontFamily: "var(--font-roboto), 'Roboto', 'Arial', sans-serif",
      }}
    >
      {/* Video player area - 16:9 */}
      <div className="relative w-full" style={{ aspectRatio: "16/9", backgroundColor: "#0f0f0f" }}>
        {data.hasMedia && data.mediaUrl ? (
          <img
            src={data.mediaUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#0f0f0f] flex items-center justify-center">
            <svg className="w-16 h-16 text-[#717171] opacity-50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[3px] bg-[#ffffff33]">
            <div
              className="h-full bg-[#FF0000]"
              style={{ width: `${data.videoPosition}%` }}
            />
          </div>
          {/* Time display */}
          <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-t from-black/60 to-transparent">
            <span className="text-white text-xs font-medium">
              {data.currentTime} / {data.videoDuration}
            </span>
          </div>
        </div>
      </div>

      {/* Video info */}
      <div className="px-4 pt-3">
        {/* Title */}
        <h2
          className="font-medium text-lg leading-[24px]"
          style={{ color: t.text }}
        >
          {data.videoTitle}
        </h2>

        {/* View count and time */}
        <div className="flex items-center gap-1 mt-1 text-sm" style={{ color: t.secondary }}>
          <span>{formatNum(data.viewCount)} views</span>
          <span>•</span>
          <span>{data.timeAgo}</span>
        </div>

        {/* Channel bar */}
        <div className="flex items-center gap-3 mt-3 pb-3" style={{ borderBottom: `1px solid ${t.border}` }}>
          {/* Channel avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex-shrink-0 flex items-center justify-center text-white font-medium text-sm">
            {data.channelName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm truncate" style={{ color: t.text }}>
                {data.channelName}
              </span>
              {data.channelVerified && (
                <svg className="w-[14px] h-[14px] flex-shrink-0" viewBox="0 0 24 24" style={{ color: t.secondary }} fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>
            <span className="text-xs" style={{ color: t.secondary }}>
              {formatNum(data.subscriberCount)} subscribers
            </span>
          </div>
          {/* Subscribe button */}
          <button
            className="px-4 py-2 rounded-full text-sm font-medium text-white flex-shrink-0"
            style={{ backgroundColor: "#FF0000" }}
          >
            Subscribe
          </button>
        </div>

        {/* Engagement bar */}
        <div className="flex items-center gap-2 py-3" style={{ borderBottom: `1px solid ${t.border}` }}>
          {/* Like / Dislike group */}
          <div className="flex items-center rounded-full overflow-hidden" style={{ backgroundColor: t.chip }}>
            <div className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer" style={{ borderRight: `1px solid ${t.border}` }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
                <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H1v11h16.67c1.54 0 2.87-1.07 3.2-2.57l1.25-5.67c.43-1.91-.85-3.76-2.35-3.76zM7 20H3v-7h4v7zm12.42-3.48l-1.25 5.67c-.14.62-.7 1.07-1.34 1.07H9v-9.58l5.38-5.88c.13-.14.3-.22.5-.22.37 0 .7.34.6.73L14 13h5.77c.71 0 1.32.87 1.15 1.52z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: t.text }}>
                {formatNum(data.likeCount)}
              </span>
            </div>
            <div className="px-3 py-1.5 cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
                <path d="M17 4h-1H6.57C5.5 4 4.59 4.67 4.38 5.61l-1.34 6C2.77 12.85 3.82 14 5.23 14h4.23l-1.52 4.94C7.62 19.97 8.46 21 9.62 21c.58 0 1.14-.24 1.52-.65L17 14h4V4h-4zm-1 8.42L10.62 18.3c-.13.14-.3.22-.5.22-.37 0-.7-.34-.6-.73L11 13H5.23c-.71 0-1.32-.87-1.15-1.52l1.34-6C5.54 5.2 5.82 5 6.14 5h9.86v7.42zM19 13h-2V5h2v8z" />
              </svg>
            </div>
          </div>

          {/* Share */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer"
            style={{ backgroundColor: t.chip }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
              <path d="M15 5.63L20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: t.text }}>Share</span>
          </div>

          {/* Download */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer"
            style={{ backgroundColor: t.chip }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
              <path d="M17 18v1H6v-1h11zm-.5-6.6l-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-5z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: t.text }}>Download</span>
          </div>

          {/* Save */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer"
            style={{ backgroundColor: t.chip }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
              <path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: t.text }}>Save</span>
          </div>
        </div>

        {/* Description */}
        <div
          className="mt-3 p-3 rounded-xl text-sm leading-[20px]"
          style={{ backgroundColor: t.descBg, color: t.text }}
        >
          <p style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {data.description}
          </p>
        </div>

        {/* Comments section */}
        <div className="mt-4 pb-4">
          {/* Comments header */}
          <div className="flex items-center gap-6 mb-4">
            <span className="text-base font-medium" style={{ color: t.text }}>
              {formatNum(data.commentCount)} Comments
            </span>
            <div className="flex items-center gap-1 cursor-pointer" style={{ color: t.text }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4H6c-1.1 0-2 .9-2 2v0c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v0c0-1.1-.9-2-2-2zM15 10H9c-1.1 0-2 .9-2 2v0c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v0c0-1.1-.9-2-2-2zM12 16h-1c-1.1 0-2 .9-2 2v0c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v0c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
          </div>

          {/* Comment list */}
          <div className="space-y-4">
            {data.comments.map((comment: YouTubeComment) => (
              <div key={comment.id} className="flex gap-3">
                {/* Comment avatar */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#606060] to-[#909090] flex-shrink-0 flex items-center justify-center text-white font-medium text-xs">
                  {comment.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  {/* Comment header */}
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-[13px]" style={{ color: t.text }}>
                      @{comment.username}
                    </span>
                    <span className="text-xs" style={{ color: t.secondary }}>
                      {comment.timeAgo}
                    </span>
                  </div>
                  {/* Comment text */}
                  <p className="text-sm leading-[20px] mt-0.5" style={{ color: t.text }}>
                    {comment.text}
                  </p>
                  {/* Comment actions */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 p-0.5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.secondary }}>
                        <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H1v11h16.67c1.54 0 2.87-1.07 3.2-2.57l1.25-5.67c.43-1.91-.85-3.76-2.35-3.76zM7 20H3v-7h4v7zm12.42-3.48l-1.25 5.67c-.14.62-.7 1.07-1.34 1.07H9v-9.58l5.38-5.88c.13-.14.3-.22.5-.22.37 0 .7.34.6.73L14 13h5.77c.71 0 1.32.87 1.15 1.52z" />
                      </svg>
                      {comment.likes > 0 && (
                        <span className="text-xs" style={{ color: t.secondary }}>
                          {formatNum(comment.likes)}
                        </span>
                      )}
                    </div>
                    <svg className="w-5 h-5 p-0.5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.secondary }}>
                      <path d="M17 4h-1H6.57C5.5 4 4.59 4.67 4.38 5.61l-1.34 6C2.77 12.85 3.82 14 5.23 14h4.23l-1.52 4.94C7.62 19.97 8.46 21 9.62 21c.58 0 1.14-.24 1.52-.65L17 14h4V4h-4zm-1 8.42L10.62 18.3c-.13.14-.3.22-.5.22-.37 0-.7-.34-.6-.73L11 13H5.23c-.71 0-1.32-.87-1.15-1.52l1.34-6C5.54 5.2 5.82 5 6.14 5h9.86v7.42zM19 13h-2V5h2v8z" />
                    </svg>
                    <span className="text-xs font-medium cursor-pointer ml-1" style={{ color: t.secondary }}>
                      Reply
                    </span>
                  </div>
                  {/* Creator heart */}
                  {comment.isHearted && (
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center text-white text-[6px] font-bold">
                          {data.channelName.charAt(0)}
                        </div>
                        <svg className="w-2.5 h-2.5 text-[#FF0000] absolute -bottom-0.5 -right-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
