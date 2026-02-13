"use client";

import type { ThreadsPostData } from "@/lib/types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export function ThreadsPostPreview({ data }: { data: ThreadsPostData }) {
  return (
    <div className="w-[500px] bg-[#101010] border border-[#393939] rounded-xl font-['system-ui','-apple-system',sans-serif] text-[#F5F5F5] overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 flex gap-3">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-xs">
            {data.username.charAt(0).toUpperCase()}
          </div>
          <div className="w-[2px] flex-1 bg-[#393939] mt-2 min-h-[20px]" />
        </div>
        <div className="flex-1 min-w-0 pb-3">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-[15px]">{data.username}</span>
            {data.verified && (
              <svg className="w-3.5 h-3.5 text-[#0095F6]" viewBox="0 0 40 40" fill="currentColor">
                <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.641l-5.436-3.137V5.15h-6.234L25.358 0l-5.36 3.094zM18.34 29.636l-8.45-8.45 3.149-3.15 5.293 5.295 9.24-9.24 3.15 3.15-12.382 12.395z"/>
              </svg>
            )}
            <span className="text-[#777] text-sm ml-auto">{data.timeAgo}</span>
            <svg className="w-5 h-5 text-[#777] cursor-pointer ml-1" viewBox="0 0 24 24" fill="currentColor">
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
            <div className="mt-3 rounded-lg overflow-hidden bg-[#1A1A1A] h-[200px] flex items-center justify-center border border-[#393939]">
              <div className="text-center text-[#555]">
                <svg className="w-8 h-8 mx-auto mb-1 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                </svg>
                <span className="text-xs">Media</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 mt-3">
            <button className="text-[#999] hover:text-[#F5F5F5] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>
            <button className="text-[#999] hover:text-[#F5F5F5] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </button>
            <button className="text-[#999] hover:text-[#F5F5F5] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 11V9a4 4 0 014-4h14"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 23l-4-4 4-4"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13v2a4 4 0 01-4 4H3"/>
              </svg>
            </button>
            <button className="text-[#999] hover:text-[#F5F5F5] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Engagement */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 text-[15px] text-[#777]">
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
