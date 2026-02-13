"use client";

import { formatNum } from "@/lib/utils";
import type { SnapchatDMData, SnapchatDMMessage } from "@/lib/types";
import { useTheme } from "next-themes";

const themes = {
  dark: {
    bg: "#1C1C1E",
    chatBg: "#2C2C2E",
    text: "#FFFFFF",
    secondary: "#8E8E93",
    sentBubble: "#0B93F6",
    receivedBubble: "#2C2C2E",
    inputBg: "#2C2C2E",
    headerBg: "linear-gradient(135deg, #FFFC00 0%, #FFD700 100%)",
    border: "#38383A",
  },
  light: {
    bg: "#FFFFFF",
    chatBg: "#EEEEEE",
    text: "#000000",
    secondary: "#8E8E93",
    sentBubble: "#0B93F6",
    receivedBubble: "#E5E5EA",
    inputBg: "#F2F2F7",
    headerBg: "linear-gradient(135deg, #FFFC00 0%, #FFD700 100%)",
    border: "#E5E5EA",
  },
};

export function SnapchatDMPreview({ data }: { data: SnapchatDMData }) {
  const { resolvedTheme } = useTheme();
  const t = themes[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <div
      className="w-[400px] rounded-lg overflow-hidden font-['-apple-system','Helvetica_Neue','Arial',sans-serif] shadow-xl"
      style={{ backgroundColor: t.bg }}
    >
      {/* Header */}
      <div
        className="px-3 py-3 flex items-center gap-2.5"
        style={{ background: t.headerBg }}
      >
        {/* Back arrow */}
        <div className="cursor-pointer flex-shrink-0">
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </div>

        {/* Bitmoji avatar */}
        <div
          className="w-[36px] h-[36px] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm border-2 border-white/30"
          style={{ backgroundColor: "#FFF", color: "#000" }}
        >
          {data.displayName.charAt(0).toUpperCase()}
        </div>

        {/* Name and username */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm text-black truncate">
              {data.displayName}
            </span>
            {data.streak > 0 && (
              <span className="text-xs font-semibold text-black/70 flex items-center gap-0.5">
                <span className="text-sm">&#x1F525;</span>
                {data.streak}
              </span>
            )}
          </div>
          <span className="text-xs text-black/60">@{data.username}</span>
        </div>

        {/* Call icons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Phone */}
          <div className="cursor-pointer">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </div>
          {/* Video */}
          <div className="cursor-pointer">
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="min-h-[340px] px-3 py-4 space-y-2"
        style={{ backgroundColor: t.chatBg }}
      >
        {data.messages.map((msg: SnapchatDMMessage, index: number) => {
          // Show time stamp if first message or different time group
          const showTime = index === 0 || data.messages[index - 1]?.time !== msg.time;

          return (
            <div key={msg.id}>
              {showTime && (
                <div className="text-center py-2">
                  <span className="text-[10px] font-medium" style={{ color: t.secondary }}>
                    {msg.time}
                  </span>
                </div>
              )}
              <div className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
                {!msg.sent && (
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold mr-2 self-end"
                    style={{ backgroundColor: "#FFFC00", color: "#000" }}
                  >
                    {data.displayName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div
                  className="max-w-[65%] rounded-2xl px-3.5 py-2 text-sm"
                  style={{
                    backgroundColor: msg.isSnap
                      ? msg.text.includes("video") || msg.text.includes("Video")
                        ? "#9B59B6"
                        : "#FF3B30"
                      : msg.sent
                        ? t.sentBubble
                        : t.receivedBubble,
                    color: msg.sent || msg.isSnap
                      ? "#FFFFFF"
                      : resolvedTheme === "dark"
                        ? "#FFFFFF"
                        : "#000000",
                  }}
                >
                  {msg.isSnap ? (
                    <div className="flex items-center gap-1.5">
                      {msg.text.includes("video") || msg.text.includes("Video") ? (
                        <>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                          </svg>
                          <span className="font-medium">Snap</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
                            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                          </svg>
                          <span className="font-medium">Snap</span>
                        </>
                      )}
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom input bar */}
      <div
        className="px-3 py-2.5 flex items-center gap-2"
        style={{ backgroundColor: t.bg, borderTop: `1px solid ${t.border}` }}
      >
        {/* Camera icon */}
        <div className="cursor-pointer flex-shrink-0" style={{ color: t.secondary }}>
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
        </div>

        {/* Text input */}
        <div
          className="flex-1 h-9 rounded-full px-4 flex items-center"
          style={{ backgroundColor: t.inputBg, border: `1px solid ${t.border}` }}
        >
          <span className="text-sm" style={{ color: t.secondary }}>
            Send a chat
          </span>
        </div>

        {/* Voice icon */}
        <div className="cursor-pointer flex-shrink-0" style={{ color: t.secondary }}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        </div>

        {/* Sticker icon */}
        <div className="cursor-pointer flex-shrink-0" style={{ color: t.secondary }}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
