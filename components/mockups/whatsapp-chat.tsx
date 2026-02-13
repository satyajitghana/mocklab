"use client";

import type { WhatsAppChatData } from "@/lib/types";

function StatusTicks({ status }: { status: string }) {
  if (status === "sent") {
    return (
      <svg className="w-4 h-3 ml-0.5 inline-block" viewBox="0 0 16 11" fill="none">
        <path d="M11 1L4.5 8.5L1.5 5.5" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  const color = status === "read" ? "#53BDEB" : "#8696A0";
  return (
    <svg className="w-4 h-3 ml-0.5 inline-block" viewBox="0 0 16 11" fill="none">
      <path d="M11 1L4.5 8.5L1.5 5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 1L8 8.5L6.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function WhatsAppChatPreview({ data }: { data: WhatsAppChatData }) {
  return (
    <div className="w-[410px] rounded-lg overflow-hidden font-['Segoe_UI','Helvetica','Arial',sans-serif] shadow-xl">
      {/* Header */}
      <div className="bg-[#202C33] px-4 py-2.5 flex items-center gap-3">
        <svg className="w-5 h-5 text-[#AEBAC1] cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <div className="w-10 h-10 rounded-full bg-[#6B7B8D] flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-[#CFD9DF]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[#E9EDEF] text-base font-medium truncate">
            {data.contactName}
          </div>
          <div className="text-[#8696A0] text-xs">
            {data.isOnline ? "online" : `last seen ${data.lastSeen}`}
          </div>
        </div>
        <div className="flex items-center gap-5 text-[#AEBAC1]">
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4zm0 7a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="min-h-[320px] px-[5%] py-3 space-y-1"
        style={{
          backgroundColor: "#0B141A",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='%230B141A'/%3E%3Cpath d='M30 10l2 4-4 2 4 2-2 4 4-2 2 4 2-4 4 2-2-4 4-2-4-2 2-4-4 2-2-4-2 4-4-2z' fill='%23172531' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      >
        {data.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[65%] rounded-lg px-[9px] py-[6px] text-sm relative ${
                msg.sent
                  ? "bg-[#005C4B] text-[#E9EDEF]"
                  : "bg-[#202C33] text-[#E9EDEF]"
              }`}
            >
              <span className="leading-[19px]">{msg.text}</span>
              <span className="float-right ml-2 mt-1 flex items-center gap-0.5">
                <span className="text-[11px] text-[#8696A0]">{msg.time}</span>
                {msg.sent && <StatusTicks status={msg.status} />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#202C33] px-3 py-2 flex items-center gap-2">
        <div className="flex items-center gap-3 text-[#8696A0]">
          <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-4.5-11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-4.5 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
          <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
          </svg>
        </div>
        <div className="flex-1 bg-[#2A3942] rounded-lg px-3 py-2">
          <span className="text-[#8696A0] text-sm">Type a message</span>
        </div>
        <svg className="w-6 h-6 text-[#8696A0] cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      </div>
    </div>
  );
}
