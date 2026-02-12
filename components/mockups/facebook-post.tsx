"use client";

import type { FacebookPostData } from "@/lib/types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

function PrivacyIcon({ privacy }: { privacy: string }) {
  if (privacy === "friends") {
    return (
      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2 13.5C2 10.46 4.69 9 8 9s6 1.46 6 4.5V15H2v-1.5z"/>
      </svg>
    );
  }
  if (privacy === "only-me") {
    return (
      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12 7V5c0-2.21-1.79-4-4-4S4 2.79 4 5v2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM6 5c0-1.1.9-2 2-2s2 .9 2 2v2H6V5z"/>
      </svg>
    );
  }
  return (
    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm9.61 1.26a3.5 3.5 0 00-1.28-2.09A1.47 1.47 0 0010 6.62V6a1 1 0 00-1-1H8.5a.5.5 0 010-1h.75a.25.25 0 00.25-.25v-.5a.25.25 0 01.25-.25h.08a1 1 0 00.97-.77A5 5 0 0113 8c0 .45-.13.87-.39 1.26z"/>
    </svg>
  );
}

export function FacebookPostPreview({ data }: { data: FacebookPostData }) {
  const totalReactions = data.likeCount + data.loveCount + data.hahaCount;

  return (
    <div className="w-[500px] bg-[#242526] rounded-lg font-['Segoe_UI','Helvetica','Arial',sans-serif] text-[#E4E6EB] shadow-lg">
      {/* Header */}
      <div className="p-3 pb-0">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0D63D4] flex items-center justify-center text-white font-bold flex-shrink-0">
            {data.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[15px] hover:underline cursor-pointer">
                {data.name}
              </span>
              {data.verified && (
                <svg className="w-3.5 h-3.5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-[#B0B3B8]">
              <span>{data.timeAgo}</span>
              <span>·</span>
              <PrivacyIcon privacy={data.privacy} />
            </div>
          </div>
          <button className="self-start text-[#B0B3B8] hover:bg-[#3A3B3C] rounded-full p-1.5">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="4" r="2"/>
              <circle cx="10" cy="10" r="2"/>
              <circle cx="10" cy="16" r="2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-2 text-[15px] leading-[1.3333] whitespace-pre-wrap">
        {data.content}
      </div>

      {/* Media */}
      {data.hasMedia && (
        <div className="w-full h-[280px] bg-[#3A3B3C] flex items-center justify-center">
          <div className="text-center text-[#B0B3B8]">
            <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
            </svg>
            <span className="text-xs">Photo</span>
          </div>
        </div>
      )}

      {/* Reactions & counts */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between text-[13px] text-[#B0B3B8]">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-0.5">
              {data.likeCount > 0 && (
                <span className="w-[18px] h-[18px] rounded-full bg-[#1877F2] flex items-center justify-center text-[9px] border-2 border-[#242526]">
                  👍
                </span>
              )}
              {data.loveCount > 0 && (
                <span className="w-[18px] h-[18px] rounded-full bg-[#F33E58] flex items-center justify-center text-[9px] border-2 border-[#242526]">
                  ❤️
                </span>
              )}
              {data.hahaCount > 0 && (
                <span className="w-[18px] h-[18px] rounded-full bg-[#F7B928] flex items-center justify-center text-[9px] border-2 border-[#242526]">
                  😆
                </span>
              )}
            </div>
            <span className="ml-0.5">{formatNum(totalReactions)}</span>
          </div>
          <div className="flex gap-2">
            {data.commentCount > 0 && (
              <span className="hover:underline cursor-pointer">
                {formatNum(data.commentCount)} comments
              </span>
            )}
            {data.shareCount > 0 && (
              <span className="hover:underline cursor-pointer">
                {formatNum(data.shareCount)} shares
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="border-t border-[#3E4042] mx-4">
        <div className="flex justify-between py-1">
          {[
            {
              label: "Like",
              icon: "M2 21h4V9H2v12zm20-9c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 3 7.59 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L22 12z",
            },
            {
              label: "Comment",
              icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
            },
            {
              label: "Share",
              icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
            },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 px-6 py-2 rounded-md text-[#B0B3B8] text-[15px] font-semibold hover:bg-[#3A3B3C] transition-colors flex-1 justify-center"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
