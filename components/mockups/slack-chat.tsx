"use client";

import type { SlackMessageData } from "@/lib/types";

export function SlackChatPreview({ data }: { data: SlackMessageData }) {
  return (
    <div className="w-[550px] rounded-lg overflow-hidden font-['Lato','Helvetica_Neue',sans-serif] shadow-xl">
      {/* Header */}
      <div className="bg-[#1A1D21] px-4 py-2.5 flex items-center gap-2 border-b border-[#393943]">
        <span className="text-[#B9BABD] text-lg">#</span>
        <span className="text-white font-bold text-[15px]">{data.channelName}</span>
        <div className="ml-auto flex items-center gap-3 text-[#B9BABD]">
          <svg className="w-4 h-4 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-[#1A1D21] min-h-[300px] px-5 py-3 space-y-4">
        {data.messages.map((msg) => (
          <div key={msg.id} className="flex gap-2 group hover:bg-[#222529] -mx-5 px-5 py-1 transition-colors">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4A154B] to-[#611F69] flex-shrink-0 flex items-center justify-center text-white font-bold text-sm mt-0.5">
              {msg.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-[15px] text-[#D1D2D3] hover:underline cursor-pointer">
                  {msg.username}
                </span>
                <span className="text-xs text-[#ABABAD]">{msg.time}</span>
              </div>
              <p className="text-[15px] text-[#D1D2D3] leading-[1.46668] mt-0.5 whitespace-pre-wrap">
                {msg.text}
              </p>
              {/* Reactions */}
              {msg.reactions.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {msg.reactions.map((r, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#2C2D30] border border-[#393943] text-xs hover:bg-[#343539] transition-colors"
                    >
                      <span>{r.emoji}</span>
                      <span className="text-[#1D9BD1] text-[11px] font-medium">{r.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#1A1D21] px-4 py-3">
        <div className="border border-[#565856] rounded-lg px-3 py-2 flex items-center gap-2">
          <div className="flex items-center gap-2 text-[#ABABAD]">
            <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 9l5 5 5-5z"/>
            </svg>
          </div>
          <span className="text-[#ABABAD] text-sm flex-1">
            Message #{data.channelName}
          </span>
          <div className="flex items-center gap-2 text-[#ABABAD]">
            <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 16c2.28 0 4.22-1.66 5-4H5c.78 2.34 2.72 4 5 4z"/>
            </svg>
            <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.59 11.47l7.55 7.55c.78.78 2.04.78 2.82 0l7.55-7.55c.78-.78.78-2.05 0-2.83L12.97.1c-.39-.39-.9-.59-1.41-.59H4.1C2.94-.49 2-.49 2 .67v7.41c0 .52.2 1.04.59 1.41z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
