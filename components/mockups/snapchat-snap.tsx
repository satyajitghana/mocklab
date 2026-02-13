"use client";

import { formatNum } from "@/lib/utils";
import type { SnapchatSnapData } from "@/lib/types";

const themes = {
  dark: { barBg: "rgba(0,0,0,0.6)", inputBg: "rgba(0,0,0,0.4)", text: "#FFFFFF" },
  light: { barBg: "rgba(255,255,255,0.7)", inputBg: "rgba(255,255,255,0.5)", text: "#000000" },
};

export function SnapchatSnapPreview({ data }: { data: SnapchatSnapData }) {
  const t = themes[data.theme] || themes.dark;
  const textColor = data.theme === "light" ? "#000000" : "#FFFFFF";
  const secondaryColor = data.theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";

  return (
    <div
      className="w-[375px] h-[667px] rounded-2xl overflow-hidden relative font-['-apple-system','Helvetica_Neue','Arial',sans-serif]"
      style={{ backgroundColor: data.bgColor || "#1a1a2e" }}
    >
      {/* Full screen background */}
      {data.hasMedia && data.mediaUrl ? (
        <img
          src={data.mediaUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: data.bgColor || "#1a1a2e" }}
        />
      )}

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 px-3 pt-4 pb-3"
        style={{ background: t.barBg }}
      >
        {/* Bitmoji avatar */}
        <div
          className="w-[36px] h-[36px] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm"
          style={{ backgroundColor: "#FFFC00", color: "#000" }}
        >
          {data.displayName.charAt(0).toUpperCase()}
        </div>

        {/* Name and time */}
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-sm" style={{ color: textColor }}>
            {data.displayName}
          </span>
          <span className="text-xs ml-2" style={{ color: secondaryColor }}>
            {data.timeAgo}
          </span>
        </div>

        {/* Timer indicator */}
        <div
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0"
          style={{ borderColor: textColor }}
        >
          <span className="text-xs font-bold" style={{ color: textColor }}>
            {data.timer}
          </span>
        </div>

        {/* More options */}
        <div className="cursor-pointer flex-shrink-0" style={{ color: textColor }}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </div>

        {/* Close button */}
        <div className="cursor-pointer flex-shrink-0" style={{ color: textColor }}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      </div>

      {/* Center snap text */}
      <div className="absolute inset-0 flex items-center justify-center z-[5] px-6">
        <p
          className="text-2xl font-bold text-center leading-relaxed"
          style={{
            color: "#FFFFFF",
            textShadow: "0 1px 8px rgba(0,0,0,0.6), 0 0 2px rgba(0,0,0,0.4)",
          }}
        >
          {data.snapText}
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-4 pt-3"
        style={{ background: t.barBg }}
      >
        <div className="flex items-center gap-2">
          {/* Camera icon */}
          <div className="cursor-pointer flex-shrink-0" style={{ color: textColor }}>
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </div>

          {/* Chat input */}
          <div
            className="flex-1 h-10 rounded-full px-4 flex items-center"
            style={{ backgroundColor: t.inputBg, border: `1px solid ${secondaryColor}` }}
          >
            <span className="text-sm" style={{ color: secondaryColor }}>
              Send a chat
            </span>
          </div>

          {/* Sticker icon */}
          <div className="cursor-pointer flex-shrink-0" style={{ color: textColor }}>
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>

          {/* Send button */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
            style={{ backgroundColor: "#0AADFF" }}
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
