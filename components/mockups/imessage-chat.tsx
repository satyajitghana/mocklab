"use client";

import type { IMessageChatData } from "@/lib/types";

export function IMessageChatPreview({ data }: { data: IMessageChatData }) {
  const themes = {
    dark: { bg: "#000", text: "#FFF", sent: "#0B93F6", received: "#26252A", headerBg: "#1C1C1E", headerBorder: "#38383A", statusBg: "#000000", inputBg: "#3A3A3C", meta: "#8E8E93", accent: "#0A84FF", avatarBg: "#636366" },
    light: { bg: "#FFF", text: "#000", sent: "#0B93F6", received: "#E5E5EA", headerBg: "#F6F6F6", headerBorder: "#C8C8CC", statusBg: "#F6F6F6", inputBg: "#E8E8ED", meta: "#8E8E93", accent: "#007AFF", avatarBg: "#C7C7CC" },
  };
  const t = themes[data.theme] || themes.dark;

  return (
    <div className="w-[375px] rounded-2xl overflow-hidden font-['-apple-system','SF_Pro','Helvetica_Neue',sans-serif] shadow-xl">
      {/* Status bar */}
      <div className="px-5 py-1.5 flex items-center justify-between text-xs" style={{ backgroundColor: t.statusBg, color: t.text }}>
        <span className="font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
          <svg className="w-5 h-3" viewBox="0 0 28 14" fill="currentColor">
            <rect x="1" y="1" width="22" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            <rect x="2.5" y="2.5" width="16" height="9" rx="1" fill="currentColor"/>
            <rect x="24" y="4" width="3" height="6" rx="1" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: t.headerBg, borderBottom: `1px solid ${t.headerBorder}` }}>
        <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.accent }}>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <div className="flex-1 text-center">
          <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center font-semibold text-sm" style={{ backgroundColor: t.avatarBg, color: t.text }}>
            {data.contactName.charAt(0).toUpperCase()}
          </div>
          <div className="text-sm font-semibold mt-1" style={{ color: t.text }}>
            {data.contactName}
          </div>
        </div>
        <div className="flex items-center gap-3" style={{ color: t.accent }}>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div className="min-h-[320px] px-3 py-4 space-y-1.5" style={{ backgroundColor: t.bg }}>
        {data.messages.map((msg, i) => {
          const prevMsg = data.messages[i - 1];
          const showTime = !prevMsg || prevMsg.sent !== msg.sent;
          return (
            <div key={msg.id}>
              {showTime && i > 0 && (
                <div className="text-center text-[11px] my-2" style={{ color: t.meta }}>
                  {msg.time}
                </div>
              )}
              <div className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-2xl px-3 py-1.5 text-[16px] leading-[21px] ${
                    msg.sent ? "rounded-br-sm" : "rounded-bl-sm"
                  }`}
                  style={{
                    backgroundColor: msg.sent ? t.sent : t.received,
                    color: msg.sent ? "#FFF" : t.text,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}
        {/* Delivered indicator */}
        <div className="text-right text-[11px] pr-1" style={{ color: t.meta }}>
          Delivered
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 py-2 flex items-center gap-2" style={{ backgroundColor: t.headerBg, borderTop: `1px solid ${t.headerBorder}` }}>
        <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.meta }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
        <div className="flex-1 rounded-full px-4 py-2" style={{ backgroundColor: t.inputBg }}>
          <span className="text-[16px]" style={{ color: t.meta }}>iMessage</span>
        </div>
      </div>
    </div>
  );
}
