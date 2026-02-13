"use client";

import { useTheme } from "next-themes";
import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import type { ThreadsPostData } from "@/lib/types";
import { formatNum } from "@/lib/utils";

export function ThreadsPostPreview({ data }: { data: ThreadsPostData }) {
  const { resolvedTheme } = useTheme();
  const themes = {
    dark: { bg: "#101010", text: "#F5F5F5", secondary: "#777777", border: "#393939", mediaBg: "#1A1A1A" },
    light: { bg: "#FFFFFF", text: "#000000", secondary: "#999999", border: "#E0E0E0", mediaBg: "#F5F5F5" },
  };
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div
      className="w-[500px] rounded-xl font-['system-ui','-apple-system',sans-serif] overflow-hidden"
      style={{ backgroundColor: t.bg, color: t.text, border: `1px solid ${t.border}` }}
    >
      {/* Main post */}
      <div className="px-4 pt-4 flex gap-3">
        <div className="flex flex-col items-center">
          {data.avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={data.avatarUrl} alt="" className="w-9 h-9 rounded-full object-cover" />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-xs">
              {data.username.charAt(0).toUpperCase()}
            </div>
          )}
          {data.replies.length > 0 && (
            <div className="w-[2px] flex-1 mt-2 min-h-[20px]" style={{ backgroundColor: t.border }} />
          )}
        </div>
        <div className="flex-1 min-w-0 pb-3">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[15px]">{data.username}</span>
            {data.verified && (
              <svg className="w-3.5 h-3.5 text-[#0095F6]" viewBox="0 0 40 40" fill="currentColor">
                <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.641l-5.436-3.137V5.15h-6.234L25.358 0l-5.36 3.094zM18.34 29.636l-8.45-8.45 3.149-3.15 5.293 5.295 9.24-9.24 3.15 3.15-12.382 12.395z"/>
              </svg>
            )}
            <span className="text-sm ml-auto" style={{ color: t.secondary }}>{data.timeAgo}</span>
            <svg className="w-5 h-5 cursor-pointer ml-1" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.secondary }}>
              <circle cx="12" cy="12" r="1.5"/>
              <circle cx="6" cy="12" r="1.5"/>
              <circle cx="18" cy="12" r="1.5"/>
            </svg>
          </div>

          {/* Content */}
          <p className="text-[15px] leading-[1.4] mt-1 whitespace-pre-wrap">
            {data.content}
          </p>

          {/* Media */}
          {data.hasMedia && (
            <div className="mt-3 rounded-lg overflow-hidden h-[200px] flex items-center justify-center" style={{ backgroundColor: t.mediaBg, border: `1px solid ${t.border}` }}>
              {data.mediaUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={data.mediaUrl} alt="Media" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div className="text-center" style={{ color: t.secondary }}>
                  <svg className="w-8 h-8 mx-auto mb-1 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                  </svg>
                  <span className="text-xs">Media</span>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-3">
            <button style={{ color: t.secondary }}>
              <Heart className="w-5 h-5" />
            </button>
            <button style={{ color: t.secondary }}>
              <MessageCircle className="w-5 h-5" />
            </button>
            <button style={{ color: t.secondary }}>
              <Repeat2 className="w-5 h-5" />
            </button>
            <button style={{ color: t.secondary }}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {data.replies.map((reply, i) => (
        <div key={reply.id} className="px-4 flex gap-3">
          <div className="flex flex-col items-center">
            {reply.avatarUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={reply.avatarUrl} alt="" className="w-7 h-7 rounded-full object-cover" />
            ) : (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-[10px]">
                {reply.username.charAt(0).toUpperCase()}
              </div>
            )}
            {i < data.replies.length - 1 && (
              <div className="w-[2px] flex-1 mt-1 min-h-[10px]" style={{ backgroundColor: t.border }} />
            )}
          </div>
          <div className="flex-1 min-w-0 pb-3">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[13px]">{reply.username}</span>
              {reply.verified && (
                <svg className="w-3 h-3 text-[#0095F6]" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.641l-5.436-3.137V5.15h-6.234L25.358 0l-5.36 3.094zM18.34 29.636l-8.45-8.45 3.149-3.15 5.293 5.295 9.24-9.24 3.15 3.15-12.382 12.395z"/>
                </svg>
              )}
              <span className="text-xs ml-auto" style={{ color: t.secondary }}>{reply.timeAgo}</span>
            </div>
            <p className="text-[14px] leading-[1.4] mt-0.5 whitespace-pre-wrap">{reply.content}</p>
            <div className="flex items-center gap-3 mt-1.5">
              <div className="flex items-center gap-1" style={{ color: t.secondary }}>
                <Heart className="w-3.5 h-3.5" />
                <span className="text-xs">{formatNum(reply.likeCount)}</span>
              </div>
              <button style={{ color: t.secondary }}>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Engagement */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 text-[15px]" style={{ color: t.secondary }}>
          <span>{formatNum(data.replyCount)} replies</span>
          <span>·</span>
          <span>{formatNum(data.likeCount)} likes</span>
          {data.repostCount > 0 && (
            <>
              <span>·</span>
              <span>{formatNum(data.repostCount)} reposts</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
