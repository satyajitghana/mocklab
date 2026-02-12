"use client";

import type { DiscordMessageData } from "@/lib/types";

export function DiscordMessagePreview({ data }: { data: DiscordMessageData }) {
  return (
    <div className="w-[550px] rounded-lg overflow-hidden font-['gg_sans','Noto_Sans','Helvetica_Neue',sans-serif] shadow-xl">
      {/* Server header */}
      <div className="bg-[#2B2D31] px-4 py-3 flex items-center gap-2 border-b border-[#1E1F22] shadow-sm">
        <svg className="w-5 h-5 text-[#80848E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.88657C10.1977 3 10.4331 3.28107 10.3788 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8866C18.1977 3 18.4331 3.28107 18.3788 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8734C13.5623 21 13.3269 20.7189 13.3812 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41001 15H15.41L16.47 9H10.47L9.41001 15Z"/>
        </svg>
        <span className="text-white font-semibold text-[15px]">
          {data.channelName}
        </span>
      </div>

      {/* Messages */}
      <div className="bg-[#313338] min-h-[300px] py-2">
        {data.messages.map((msg) => (
          <div
            key={msg.id}
            className="flex gap-4 px-4 py-1 hover:bg-[#2E3035] transition-colors group"
          >
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm mt-0.5"
              style={{
                backgroundColor: msg.roleColor || "#5865F2",
              }}
            >
              {msg.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className="font-medium text-[15px] hover:underline cursor-pointer"
                  style={{ color: msg.roleColor || "#F2F3F5" }}
                >
                  {msg.username}
                </span>
                {msg.isBot && (
                  <span className="text-[10px] px-[4px] py-[1px] rounded-sm bg-[#5865F2] text-white font-medium uppercase tracking-wider">
                    Bot
                  </span>
                )}
                <span className="text-xs text-[#949BA4]">{msg.time}</span>
              </div>
              <p className="text-[15px] text-[#DBDEE1] leading-[1.375] mt-0.5 whitespace-pre-wrap">
                {msg.text}
              </p>
              {/* Reactions */}
              {msg.reactions.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {msg.reactions.map((r, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#2B2D31] border border-[#1E1F22] text-sm hover:border-[#4E505A] transition-colors"
                    >
                      <span>{r.emoji}</span>
                      <span className="text-[#DBDEE1] text-xs">{r.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#313338] px-4 pb-6 pt-2">
        <div className="bg-[#383A40] rounded-lg px-4 py-2.5 flex items-center gap-3">
          <svg className="w-6 h-6 text-[#B5BAC1] cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"/>
          </svg>
          <span className="text-[#6D6F78] text-[15px] flex-1">
            Message #{data.channelName}
          </span>
          <div className="flex items-center gap-3 text-[#B5BAC1]">
            <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 16.001C2 16.7 2.3 17.4 2.9 17.9C3.5 18.5 4.3 18.7 5 18.6C5 20 6.1 21 7.5 21C8.4 21 9.2 20.5 9.7 19.8C10.1 20 10.5 20 11 20C12.6 20 14 18.6 14 17V16H2V16.001Z"/>
              <path d="M14 16.001C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16H22V15.5C22 14.1 20.9 13 19.5 13H14.5C13.1 13 12 14.1 12 15.5V16H14V16.001Z"/>
              <path d="M11 6C9.3 6 8 7.3 8 9V12H14V9C14 7.3 12.7 6 11 6Z"/>
              <path d="M19 8V12H17V8.5C17 7.1 18.1 6 19.5 6C20.9 6 22 7.1 22 8.5V12H20V8H19Z"/>
            </svg>
            <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.487 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.487 17.514 2 12 2ZM8.5 9.5C9.328 9.5 10 10.172 10 11C10 11.828 9.328 12.5 8.5 12.5C7.672 12.5 7 11.828 7 11C7 10.172 7.672 9.5 8.5 9.5ZM16.154 16.461C15.725 17.131 14.529 18 12 18C9.471 18 8.275 17.131 7.847 16.461C7.7 16.231 7.746 15.924 7.952 15.749C8.157 15.573 8.469 15.604 8.653 15.801C8.849 16.011 9.634 17 12 17C14.366 17 15.151 16.011 15.347 15.801C15.531 15.604 15.843 15.573 16.048 15.749C16.254 15.924 16.3 16.231 16.154 16.461ZM15.5 12.5C14.672 12.5 14 11.828 14 11C14 10.172 14.672 9.5 15.5 9.5C16.328 9.5 17 10.172 17 11C17 11.828 16.328 12.5 15.5 12.5Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
