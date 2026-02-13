"use client";

import type { TelegramChatData } from "@/lib/types";

function TelegramTicks({ status }: { status: string }) {
  if (status === "sent") {
    return (
      <svg className="w-4 h-3 ml-1 inline-block" viewBox="0 0 16 11" fill="none">
        <path d="M11 1L4.5 8.5L1.5 5.5" stroke="#6BB3F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg className="w-4 h-3 ml-1 inline-block" viewBox="0 0 16 11" fill="none">
      <path d="M11 1L4.5 8.5L1.5 5.5" stroke="#6BB3F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 1L8 8.5L6.5 7" stroke="#6BB3F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TelegramChatPreview({ data }: { data: TelegramChatData }) {
  const themes = {
    dark: { bg: "#17212B", text: "#F5F5F5", sent: "#2B5278", received: "#182533", header: "#212121", headerBorder: "#0E0E0E", inputBg: "#242F3D", meta: "#6C7883", timeSent: "rgba(107,179,249,0.7)" },
    light: { bg: "#C7D8E8", text: "#000", sent: "#EFFDDE", received: "#FFF", header: "#517DA2", headerBorder: "#4A7395", inputBg: "#FFF", meta: "#8E8E93", timeSent: "#6BB76D" },
  };
  const t = themes[data.theme] || themes.dark;
  const sentTextColor = data.theme === "light" ? "#000" : "#FFF";
  const receivedTextColor = data.theme === "light" ? "#000" : "#FFF";
  const headerTextColor = data.theme === "light" ? "#FFF" : "#FFF";

  return (
    <div className="w-[410px] rounded-lg overflow-hidden font-['Roboto','system-ui',sans-serif] shadow-xl">
      {/* Header */}
      <div className="px-4 py-2.5 flex items-center gap-3" style={{ backgroundColor: t.header, borderBottom: `1px solid ${t.headerBorder}` }}>
        <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: data.theme === "light" ? "#FFF" : "#8E8E93" }}>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C93CB] to-[#4E73A5] flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
          {data.contactName.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-medium truncate" style={{ color: headerTextColor }}>
            {data.contactName}
          </div>
          <div className="text-xs" style={{ color: data.theme === "light" ? "rgba(255,255,255,0.7)" : "#8E8E93" }}>
            {data.lastSeen}
          </div>
        </div>
        <div className="flex items-center gap-5" style={{ color: data.theme === "light" ? "#FFF" : "#8E8E93" }}>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div className="min-h-[320px] px-4 py-3 space-y-1.5" style={{ backgroundColor: t.bg }}>
        {data.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[65%] rounded-xl px-3 py-[7px] text-sm ${
                msg.sent ? "rounded-br-sm" : "rounded-bl-sm"
              }`}
              style={{
                backgroundColor: msg.sent ? t.sent : t.received,
                color: msg.sent ? sentTextColor : receivedTextColor,
              }}
            >
              <span className="leading-[20px]">{msg.text}</span>
              <span className="float-right ml-2 mt-0.5 flex items-center">
                <span className="text-[11px]" style={{ color: t.timeSent }}>{msg.time}</span>
                {msg.sent && <TelegramTicks status={msg.status} />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="px-3 py-2.5 flex items-center gap-2" style={{ backgroundColor: data.theme === "dark" ? "#17212B" : "#FFF" }}>
        <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.meta }}>
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <div className="flex-1 rounded-xl px-3 py-2" style={{ backgroundColor: t.inputBg }}>
          <span className="text-sm" style={{ color: t.meta }}>Message</span>
        </div>
        <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor" style={{ color: t.meta }}>
          <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V22h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
      </div>
    </div>
  );
}
