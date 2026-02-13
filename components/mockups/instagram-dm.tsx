"use client";

import type { InstagramDMData } from "@/lib/types";
import { useTheme } from "next-themes";

export function InstagramDMPreview({ data }: { data: InstagramDMData }) {
  const { resolvedTheme } = useTheme();
  const themes = {
    dark: { bg: "#000", text: "#F5F5F5", sent: "#3797F0", received: "#262626", secondary: "#A8A8A8", border: "#262626" },
    light: { bg: "#FFF", text: "#262626", sent: "#3797F0", received: "#EFEFEF", secondary: "#8E8E8E", border: "#DBDBDB" },
  };
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div className="w-[393px] rounded-lg overflow-hidden font-['system-ui','-apple-system',sans-serif] shadow-xl">
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: t.bg, borderBottom: `1px solid ${t.border}` }}>
        <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.text }}>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#C13584] p-[2px]">
          <div className="w-full h-full rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ backgroundColor: t.bg }}>
            {data.username.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate" style={{ color: t.text }}>
            {data.username}
          </div>
          <div className="text-xs" style={{ color: t.secondary }}>
            {data.isActive ? "Active now" : "Instagram"}
          </div>
        </div>
        <div className="flex items-center gap-4" style={{ color: t.text }}>
          <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div className="min-h-[320px] px-4 py-4 space-y-2" style={{ backgroundColor: t.bg }}>
        {data.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            {!msg.sent && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#C13584] p-[1.5px] mr-2 flex-shrink-0 self-end">
                <div className="w-full h-full rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ backgroundColor: t.bg }}>
                  {data.username.charAt(0).toUpperCase()}
                </div>
              </div>
            )}
            <div
              className="max-w-[65%] rounded-3xl px-4 py-2.5 text-sm"
              style={{
                backgroundColor: msg.sent ? t.sent : t.received,
                color: msg.sent ? "#FFF" : t.text,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-4 py-3" style={{ backgroundColor: t.bg, borderTop: `1px solid ${t.border}` }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#0095F6]" style={{ border: `1px solid ${t.border}` }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="10" r="1.5"/>
              <circle cx="15.5" cy="10" r="1.5"/>
              <path d="M8 14.5s1.5 2 4 2 4-2 4-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-sm" style={{ color: t.secondary }}>Message...</span>
          </div>
          <div className="flex items-center gap-3" style={{ color: t.text }}>
            <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
            <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 6h-5V4.33C16 3.6 15.4 3 14.67 3H9.33C8.6 3 8 3.6 8 4.33V6H3c-.55 0-1 .45-1 1v1h20V7c0-.55-.45-1-1-1zm-2 4H5v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
