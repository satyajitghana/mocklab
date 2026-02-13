"use client";

import type { InstagramStoryData } from "@/lib/types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

export function InstagramStoryPreview({ data }: { data: InstagramStoryData }) {
  return (
    <div
      className="w-[375px] h-[667px] rounded-2xl overflow-hidden relative font-['system-ui','-apple-system',sans-serif]"
      style={{ backgroundColor: data.bgColor || "#1a1a2e" }}
    >
      {/* Progress bar */}
      <div className="absolute top-2 left-3 right-3 z-10">
        <div className="h-[2px] bg-white/30 rounded-full overflow-hidden">
          <div className="h-full w-[60%] bg-white rounded-full" />
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-5 left-3 right-3 z-10 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#C13584] p-[2px]">
          <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center text-[9px] font-bold text-white">
            {data.username.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-1">
          <span className="text-white text-[13px] font-semibold">{data.username}</span>
          {data.verified && (
            <svg className="w-3 h-3 text-[#0095F6]" viewBox="0 0 40 40" fill="currentColor">
              <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.641l-5.436-3.137V5.15h-6.234L25.358 0l-5.36 3.094zM18.34 29.636l-8.45-8.45 3.149-3.15 5.293 5.295 9.24-9.24 3.15 3.15-12.382 12.395z"/>
            </svg>
          )}
          <span className="text-white/60 text-[13px]">{data.timeAgo}</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6" cy="12" r="1.5" />
            <circle cx="18" cy="12" r="1.5" />
          </svg>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </div>
      </div>

      {/* Story content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-2xl font-bold text-center px-8 leading-relaxed drop-shadow-lg">
          {data.storyText}
        </p>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-4 left-3 right-3 z-10">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-10 rounded-full border border-white/40 px-4 flex items-center">
            <span className="text-white/50 text-sm">Send message</span>
          </div>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </div>
        {/* Viewer count */}
        <div className="flex items-center justify-center mt-3 gap-1">
          <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          <span className="text-white/60 text-xs">{formatNum(data.viewerCount)}</span>
        </div>
      </div>
    </div>
  );
}
