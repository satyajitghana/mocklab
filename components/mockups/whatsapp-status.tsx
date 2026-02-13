"use client";

import { useTheme } from "next-themes";
import { ArrowLeft, MoreVertical, Send } from "lucide-react";
import { formatNum } from "@/lib/utils";
import type { WhatsAppStatusData } from "@/lib/types";

export function WhatsAppStatusPreview({ data }: { data: WhatsAppStatusData }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="w-[393px] h-[852px] rounded-2xl overflow-hidden relative font-['Segoe_UI','Helvetica','Arial',sans-serif]"
      style={{ backgroundColor: data.bgColor || "#075E54" }}
    >
      {/* Background: media image or solid color */}
      {data.mediaUrl ? (
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.mediaUrl}
            alt="Status"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: data.bgColor || "#075E54" }}
        />
      )}

      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-3 pb-1">
        <span className="text-white text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <svg className="w-4 h-3" viewBox="0 0 18 12" fill="white">
            <rect x="0" y="9" width="3" height="3" rx="0.5" />
            <rect x="5" y="6" width="3" height="6" rx="0.5" />
            <rect x="10" y="3" width="3" height="9" rx="0.5" />
            <rect x="15" y="0" width="3" height="12" rx="0.5" />
          </svg>
          {/* WiFi */}
          <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white">
            <path d="M8 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM3.46 7.04l1.42 1.42A4.98 4.98 0 018 7c1.18 0 2.26.41 3.12 1.1l-.01.01 1.42-1.42A6.98 6.98 0 008 5a6.98 6.98 0 00-4.54 2.04zM1.04 4.62l1.42 1.42A7.96 7.96 0 018 4c2.1 0 4.04.81 5.54 2.14l1.42-1.42A9.96 9.96 0 008 2a9.96 9.96 0 00-6.96 2.62z" />
          </svg>
          {/* Battery */}
          <svg className="w-6 h-3" viewBox="0 0 27 13" fill="none">
            <rect x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke="white" strokeOpacity="0.5" />
            <rect x="2" y="2" width="18" height="9" rx="1" fill="white" />
            <path d="M25 4.5v4a2 2 0 000-4z" fill="white" fillOpacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute top-10 left-2 right-2 z-20">
        <div className="h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
          <div className="h-full w-full rounded-full" style={{ backgroundColor: "rgba(255,255,255,1)" }} />
        </div>
      </div>

      {/* Top bar: back, username, timeAgo, menu */}
      <div className="absolute top-[50px] left-0 right-0 z-20 flex items-center gap-3 px-3 py-2">
        <ArrowLeft className="w-6 h-6 text-white cursor-pointer flex-shrink-0" />

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#6B7B8D] flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-white">
            {data.username.charAt(0).toUpperCase()}
          </span>
        </div>

        {/* Name + time */}
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-semibold truncate">{data.username}</div>
          <div className="text-white/60 text-xs">{data.timeAgo}</div>
        </div>

        {/* Muted indicator */}
        {data.isMuted && (
          <svg className="w-5 h-5 text-white/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}

        <MoreVertical className="w-5 h-5 text-white cursor-pointer flex-shrink-0" />
      </div>

      {/* Status text overlaid at center */}
      <div className="absolute inset-0 flex items-center justify-center z-[5] px-8">
        <p
          className="text-white text-2xl font-bold text-center leading-relaxed"
          style={{
            textShadow: "0 2px 12px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.4)",
          }}
        >
          {data.statusText}
        </p>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-6 pt-3">
        {/* Viewer count */}
        <div className="flex items-center justify-center mb-3 gap-1">
          <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
          <span className="text-white/60 text-xs">{formatNum(data.viewerCount)}</span>
        </div>

        {/* Reply input + send */}
        <div className="flex items-center gap-2">
          <div
            className="flex-1 h-11 rounded-full px-4 flex items-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span className="text-white/50 text-sm">Reply</span>
          </div>

          {/* Send button */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
            style={{ backgroundColor: "#25D366" }}
          >
            <Send className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
