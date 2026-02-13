"use client";

import type { GmailEmailData } from "@/lib/types";

export function GmailEmailPreview({ data }: { data: GmailEmailData }) {
  const themes = {
    dark: { bg: "#1B1B1F", text: "#E8EAED", secondary: "#9AA0A6", border: "#3C4043", bodyText: "#BDC1C6", avatarBg: "#4285F4", labelBg: "#3C4043", starColor: "#F4B400" },
    light: { bg: "#FFF", text: "#202124", secondary: "#5F6368", border: "#DADCE0", bodyText: "#3C4043", avatarBg: "#4285F4", labelBg: "#E8EAED", starColor: "#F4B400" },
  };
  const t = themes[data.theme] || themes.dark;

  return (
    <div
      className="w-[600px] rounded-lg overflow-hidden font-[var(--font-roboto),'Google_Sans','Roboto','Arial',sans-serif] shadow-xl"
      style={{ backgroundColor: t.bg, border: `1px solid ${t.border}` }}
    >
      {/* Subject header */}
      <div className="px-6 py-4" style={{ borderBottom: `1px solid ${t.border}` }}>
        <div className="flex items-center gap-3">
          <h1 className="text-xl flex-1" style={{ color: t.text }}>{data.subject}</h1>
          <div className="flex items-center gap-2">
            {data.labels.map((label) => (
              <span
                key={label}
                className="text-[11px] px-2 py-0.5 rounded-sm"
                style={{ backgroundColor: t.labelBg, color: t.text }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sender info */}
      <div className="px-6 py-4 flex items-start gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-base flex-shrink-0" style={{ backgroundColor: t.avatarBg }}>
          {data.from.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: t.text }}>{data.from}</span>
            <span className="text-xs" style={{ color: t.secondary }}>&lt;{data.fromEmail}&gt;</span>
          </div>
          <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: t.secondary }}>
            <span>to {data.to}</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2" style={{ color: t.secondary }}>
          <span className="text-xs">{data.date}</span>
          {/* Star */}
          <svg
            className="w-5 h-5 cursor-pointer"
            viewBox="0 0 24 24"
            fill={data.isStarred ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: data.isStarred ? t.starColor : t.secondary }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          {/* Reply */}
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
          </svg>
          {/* More */}
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
      </div>

      {/* Email body */}
      <div className="px-6 pb-6 pl-[76px]">
        <div className="text-sm leading-[1.58] whitespace-pre-wrap" style={{ color: t.bodyText }}>
          {data.body}
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-4 pl-[76px] flex gap-2">
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-colors"
          style={{ border: `1px solid ${t.border}`, color: t.text }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
          </svg>
          Reply
        </button>
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-colors"
          style={{ border: `1px solid ${t.border}`, color: t.text }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/>
          </svg>
          Forward
        </button>
      </div>
    </div>
  );
}
