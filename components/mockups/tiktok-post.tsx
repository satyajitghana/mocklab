"use client";

import { useTheme } from "next-themes";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Search,
  Music,
  Plus,
} from "lucide-react";
import type { TikTokPostData } from "@/lib/types";

function fmt(n: number) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export function TikTokPostPreview({ data }: { data: TikTokPostData }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="relative overflow-hidden rounded-[40px] font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] select-none"
      style={{
        width: 393,
        height: 852,
        backgroundColor: "#000",
      }}
    >
      {/* ── Full-screen video / media area ── */}
      <div className="absolute inset-0">
        {data.hasMedia && data.mediaUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.mediaUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-black" />
        )}
      </div>

      {/* ── Gradient overlay at bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[360px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── Status bar ── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 pt-[14px] pb-2">
        {/* Time */}
        <span className="text-white text-[15px] font-semibold tracking-tight">
          9:41
        </span>

        {/* Right status icons: signal, wifi, battery */}
        <div className="flex items-center gap-[5px]">
          {/* Cellular signal */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
            <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="1" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="1" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="1" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="1" />
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
            <path d="M8 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path
              d="M4.94 7.06a4.5 4.5 0 016.12 0"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M2.1 4.22a8 8 0 0111.8 0"
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          {/* Battery */}
          <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="22"
              height="11"
              rx="2.5"
              stroke="white"
              strokeOpacity="0.35"
            />
            <rect x="2" y="2" width="19" height="7" rx="1.5" fill="white" />
            <path
              d="M24 4v4a2 2 0 000-4z"
              fill="white"
              fillOpacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* ── Top navigation: "Following | For You" ── */}
      <div className="absolute top-[52px] left-0 right-0 z-20 flex items-center justify-center gap-0">
        <div className="flex items-center">
          <span className="text-white/60 text-[17px] font-semibold px-4">
            Following
          </span>
          <span className="text-white/30 text-[17px] font-light">|</span>
          <span className="relative text-white text-[17px] font-bold px-4">
            For You
            <span
              className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-[3px] w-8 rounded-full bg-white"
            />
          </span>
        </div>
      </div>

      {/* ── Top-right search icon ── */}
      <div className="absolute top-[50px] right-4 z-20">
        <Search className="text-white" size={24} strokeWidth={2.2} />
      </div>

      {/* ── Right sidebar action buttons ── */}
      <div className="absolute right-3 bottom-[100px] z-20 flex flex-col items-center gap-[18px]">
        {/* Profile avatar with + follow button */}
        <div className="relative mb-1">
          <div
            className="w-[48px] h-[48px] rounded-full border-[2px] border-white overflow-hidden flex items-center justify-center"
            style={{
              background: data.avatarUrl
                ? undefined
                : "linear-gradient(135deg, #FE2C55, #25F4EE)",
            }}
          >
            {data.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.avatarUrl}
                alt={data.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-bold text-lg leading-none">
                {data.username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          {/* Red + follow button */}
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#FE2C55] flex items-center justify-center shadow-lg">
            <Plus className="text-white" size={14} strokeWidth={3} />
          </div>
        </div>

        {/* Heart / Likes */}
        <div className="flex flex-col items-center gap-[2px]">
          <Heart
            className="text-white drop-shadow-md"
            size={32}
            fill="white"
            strokeWidth={0}
          />
          <span className="text-white text-[12px] font-semibold drop-shadow-md">
            {fmt(data.likes)}
          </span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center gap-[2px]">
          <MessageCircle
            className="text-white drop-shadow-md"
            size={32}
            fill="white"
            strokeWidth={0}
          />
          <span className="text-white text-[12px] font-semibold drop-shadow-md">
            {fmt(data.comments)}
          </span>
        </div>

        {/* Bookmark */}
        <div className="flex flex-col items-center gap-[2px]">
          <Bookmark
            className="text-white drop-shadow-md"
            size={32}
            fill="white"
            strokeWidth={0}
          />
          <span className="text-white text-[12px] font-semibold drop-shadow-md">
            {fmt(data.bookmarks)}
          </span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-[2px]">
          <Share2
            className="text-white drop-shadow-md"
            size={30}
            strokeWidth={2.2}
          />
          <span className="text-white text-[12px] font-semibold drop-shadow-md">
            {fmt(data.shares)}
          </span>
        </div>

        {/* Spinning music disc */}
        <div className="relative mt-1">
          <div
            className="w-[46px] h-[46px] rounded-full flex items-center justify-center animate-[spin_3s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, #1a1a1a, #333, #1a1a1a, #444, #1a1a1a, #333, #1a1a1a)",
            }}
          >
            {/* Outer ring grooves */}
            <div className="w-[42px] h-[42px] rounded-full border-[3px] border-[#2a2a2a] flex items-center justify-center">
              {/* Inner album art area */}
              <div
                className="w-[22px] h-[22px] rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #FE2C55, #25F4EE)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom overlay text ── */}
      <div className="absolute bottom-5 left-4 right-[72px] z-20">
        {/* Username */}
        <div className="flex items-center gap-1.5 mb-[6px]">
          <span className="text-white text-[16px] font-bold drop-shadow-md">
            @{data.username}
          </span>
          {data.verified && (
            <svg
              className="w-[14px] h-[14px] flex-shrink-0"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#20D5EC" />
              <path
                d="M21.5 35L10 23.5L14.5 19L21.5 26L35 12.5L39.5 17L21.5 35Z"
                fill="white"
              />
            </svg>
          )}
        </div>

        {/* Caption */}
        <p
          className="text-white text-[14px] leading-[19px] mb-3 drop-shadow-md"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.caption}
        </p>

        {/* Music row */}
        <div className="flex items-center gap-[6px]">
          <Music
            className="text-white flex-shrink-0"
            size={14}
            strokeWidth={2.5}
          />
          <div className="overflow-hidden">
            <span className="text-white text-[13px] whitespace-nowrap drop-shadow-md">
              {data.musicName} - {data.musicAuthor}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom home bar indicator ── */}
      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-white/50 z-30" />
    </div>
  );
}
