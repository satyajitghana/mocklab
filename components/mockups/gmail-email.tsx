"use client";

import type { GmailEmailData } from "@/lib/types";

export function GmailEmailPreview({ data }: { data: GmailEmailData }) {
  return (
    <div className="w-[600px] bg-[#1B1B1F] rounded-lg overflow-hidden font-['Google_Sans','Roboto','Arial',sans-serif] shadow-xl border border-[#3C4043]">
      {/* Subject header */}
      <div className="px-6 py-4 border-b border-[#3C4043]">
        <div className="flex items-center gap-3">
          <h1 className="text-xl text-[#E8EAED] flex-1">{data.subject}</h1>
          <div className="flex items-center gap-2">
            {data.labels.map((label) => (
              <span
                key={label}
                className="text-[11px] px-2 py-0.5 rounded-sm bg-[#3C4043] text-[#E8EAED]"
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
        <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-medium text-base flex-shrink-0">
          {data.from.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#E8EAED]">{data.from}</span>
            <span className="text-xs text-[#9AA0A6]">&lt;{data.fromEmail}&gt;</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#9AA0A6] mt-0.5">
            <span>to {data.to}</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#9AA0A6]">
          <span className="text-xs">{data.date}</span>
          {/* Star */}
          <svg
            className={`w-5 h-5 cursor-pointer ${data.isStarred ? "text-[#F4B400]" : "text-[#9AA0A6]"}`}
            viewBox="0 0 24 24"
            fill={data.isStarred ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
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
        <div className="text-sm text-[#BDC1C6] leading-[1.58] whitespace-pre-wrap">
          {data.body}
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-4 pl-[76px] flex gap-2">
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#3C4043] text-sm text-[#E8EAED] hover:bg-[#3C4043]/50 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
          </svg>
          Reply
        </button>
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#3C4043] text-sm text-[#E8EAED] hover:bg-[#3C4043]/50 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/>
          </svg>
          Forward
        </button>
      </div>
    </div>
  );
}
