"use client";

import { useTheme } from "next-themes";
import { ChevronLeft, Video, Phone, Plus, Mic } from "lucide-react";
import type { IMessageChatData } from "@/lib/types";

export function IMessageChatPreview({ data }: { data: IMessageChatData }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const colors = {
    bg: isDark ? "#000000" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#000000",
    secondaryText: isDark ? "#8E8E93" : "#8E8E93",
    sentBubble: "#007AFF",
    receivedBubble: isDark ? "#3A3A3C" : "#E5E5EA",
    sentText: "#FFFFFF",
    receivedText: isDark ? "#FFFFFF" : "#000000",
    headerBg: isDark ? "rgba(0,0,0,0.85)" : "rgba(249,249,249,0.94)",
    headerBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    inputBg: isDark ? "#1C1C1E" : "#F2F2F7",
    inputBorder: isDark ? "#3A3A3C" : "#C7C7CC",
    inputBarBg: isDark ? "rgba(0,0,0,0.85)" : "rgba(249,249,249,0.94)",
    accent: "#007AFF",
    dynamicIsland: "#000000",
    avatarFrom: isDark ? "#636366" : "#A2A2A7",
    avatarTo: isDark ? "#48484A" : "#8E8E93",
    timeSeparatorBg: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
  };

  // Group messages for tail logic
  const messages = data.messages;

  return (
    <div
      className="w-[393px] rounded-[40px] overflow-hidden shadow-2xl relative"
      style={{
        backgroundColor: colors.bg,
        fontFamily:
          "-apple-system, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
      }}
    >
      {/* Dynamic Island */}
      <div
        className="relative flex items-center justify-between px-8 pt-3 pb-0"
        style={{ backgroundColor: colors.bg }}
      >
        {/* Status bar: time left, icons right */}
        <span
          className="text-[15px] font-semibold tracking-tight"
          style={{ color: colors.text }}
        >
          9:41
        </span>

        {/* Dynamic Island pill */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-3 w-[126px] h-[37px] rounded-full"
          style={{ backgroundColor: colors.dynamicIsland }}
        />

        {/* Right status icons */}
        <div className="flex items-center gap-1" style={{ color: colors.text }}>
          {/* Cellular signal bars */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
            <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="1" />
            <rect x="4" y="6" width="3" height="6" rx="0.5" opacity="1" />
            <rect x="8" y="3" width="3" height="9" rx="0.5" opacity="1" />
            <rect x="12" y="0" width="3" height="12" rx="0.5" opacity="1" />
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 9.6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM4.1 7.5a5.5 5.5 0 017.8 0l-1.1 1.1a3.9 3.9 0 00-5.6 0L4.1 7.5zM1.5 4.9a9.2 9.2 0 0113 0l-1.1 1.1a7.6 7.6 0 00-10.8 0L1.5 4.9z" />
          </svg>
          {/* Battery */}
          <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
            <rect
              x="0.5"
              y="0.5"
              width="22"
              height="12"
              rx="3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.35"
            />
            <rect x="2" y="2" width="18" height="8.5" rx="1.5" fill="currentColor" />
            <path
              d="M24 4.5v4a2 2 0 000-4z"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div
        className="px-3 pt-1 pb-2 flex items-center"
        style={{
          backgroundColor: colors.headerBg,
          borderBottom: `0.5px solid ${colors.headerBorder}`,
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Back button */}
        <div className="flex items-center gap-0 min-w-[70px]">
          <ChevronLeft
            size={28}
            strokeWidth={2.5}
            style={{ color: colors.accent }}
            className="cursor-pointer -mr-1"
          />
          <span
            className="text-[17px]"
            style={{ color: colors.accent }}
          >

          </span>
        </div>

        {/* Center: avatar + name */}
        <div className="flex-1 flex flex-col items-center gap-0.5">
          {/* Avatar circle with gradient */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[17px] font-semibold"
            style={{
              background: `linear-gradient(135deg, ${colors.avatarFrom}, ${colors.avatarTo})`,
            }}
          >
            {data.contactName.charAt(0).toUpperCase()}
          </div>
          <span
            className="text-[11px] font-medium"
            style={{ color: colors.text }}
          >
            {data.contactName}
          </span>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 min-w-[70px] justify-end">
          <Video
            size={22}
            strokeWidth={1.8}
            style={{ color: colors.accent }}
            className="cursor-pointer"
          />
          <Phone
            size={20}
            strokeWidth={1.8}
            style={{ color: colors.accent }}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Chat area */}
      <div
        className="px-3 py-3 space-y-[3px]"
        style={{
          backgroundColor: colors.bg,
          minHeight: 280,
        }}
      >
        {messages.map((msg, i) => {
          const prevMsg = messages[i - 1];
          const nextMsg = messages[i + 1];
          const showTimeSeparator = i === 0 || (prevMsg && prevMsg.time !== msg.time);

          // Tail logic: is this the last bubble in a consecutive group from the same sender?
          const isLastInGroup = !nextMsg || nextMsg.sent !== msg.sent;
          const isFirstInGroup = !prevMsg || prevMsg.sent !== msg.sent;

          // Is last sent message? (for "Delivered" label)
          const isLastSent =
            msg.sent &&
            (!nextMsg || !nextMsg.sent) &&
            i ===
              messages.length -
                1 -
                [...messages].reverse().findIndex((m) => m.sent);

          // Corner radii
          const radius = 18;
          const tailRadius = 4;
          const borderRadius = msg.sent
            ? `${isFirstInGroup ? radius : radius * 0.6}px ${isFirstInGroup ? radius : radius * 0.6}px ${isLastInGroup ? tailRadius : radius * 0.6}px ${radius}px`
            : `${isFirstInGroup ? radius : radius * 0.6}px ${isFirstInGroup ? radius : radius * 0.6}px ${radius}px ${isLastInGroup ? tailRadius : radius * 0.6}px`;

          return (
            <div key={msg.id}>
              {/* Time separator */}
              {showTimeSeparator && (
                <div className="flex justify-center py-2 pb-1">
                  <span
                    className="text-[11px] font-medium px-3 py-0.5 rounded-full"
                    style={{
                      color: colors.secondaryText,
                      backgroundColor: colors.timeSeparatorBg,
                    }}
                  >
                    {msg.time}
                  </span>
                </div>
              )}

              {/* Message row */}
              <div
                className={`flex items-end gap-[6px] ${msg.sent ? "justify-end pl-14" : "justify-start pr-14"}`}
                style={{ marginTop: isFirstInGroup && i > 0 ? 6 : 1 }}
              >
                {/* Avatar for received, only on last in group */}
                {!msg.sent && (
                  <div className="w-[28px] flex-shrink-0">
                    {isLastInGroup && (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${colors.avatarFrom}, ${colors.avatarTo})`,
                        }}
                      >
                        {data.contactName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                )}

                {/* Bubble */}
                <div
                  className="max-w-[75%] px-3 py-[7px] text-[16.5px] leading-[21px] relative"
                  style={{
                    backgroundColor: msg.sent
                      ? colors.sentBubble
                      : colors.receivedBubble,
                    color: msg.sent ? colors.sentText : colors.receivedText,
                    borderRadius,
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}
                </div>
              </div>

              {/* Delivered status */}
              {isLastSent && (
                <div
                  className="text-right text-[11px] pr-2 pt-[3px] font-normal tracking-tight"
                  style={{ color: colors.secondaryText }}
                >
                  Delivered
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom input bar */}
      <div
        className="px-2 pt-1.5 pb-7 flex items-end gap-1.5"
        style={{
          backgroundColor: colors.inputBarBg,
          borderTop: `0.5px solid ${colors.headerBorder}`,
        }}
      >
        {/* Plus circle button */}
        <button
          className="flex-shrink-0 w-[33px] h-[33px] rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.secondaryText }}
        >
          <Plus size={20} strokeWidth={2.5} color="#FFFFFF" />
        </button>

        {/* Text field */}
        <div
          className="flex-1 rounded-full px-3 py-[6px] flex items-center"
          style={{
            border: `1px solid ${colors.inputBorder}`,
            backgroundColor: "transparent",
          }}
        >
          <span
            className="text-[16px] leading-[21px] flex-1"
            style={{ color: colors.secondaryText }}
          >
            iMessage
          </span>
        </div>

        {/* Mic button */}
        <button className="flex-shrink-0 w-[33px] h-[33px] flex items-center justify-center">
          <Mic
            size={22}
            strokeWidth={1.8}
            style={{ color: colors.secondaryText }}
          />
        </button>
      </div>

      {/* Home indicator bar */}
      <div
        className="flex justify-center pb-2 -mt-3"
        style={{ backgroundColor: colors.inputBarBg }}
      >
        <div
          className="w-[134px] h-[5px] rounded-full"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.3)"
              : "rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
}
