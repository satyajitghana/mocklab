"use client";

import type { RedditPostData } from "@/lib/types";

function formatNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export function RedditPostPreview({ data }: { data: RedditPostData }) {
  return (
    <div className="w-[600px] bg-[#1A1A1B] border border-[#343536] rounded-md font-['IBMPlexSans','-apple-system',system-ui,sans-serif] text-[#D7DADC] overflow-hidden">
      {/* Vote column + content */}
      <div className="flex">
        {/* Vote column */}
        <div className="w-10 bg-[#161617] flex flex-col items-center py-2 gap-1">
          <button className="text-[#818384] hover:text-[#FF4500] transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
          </button>
          <span className="text-xs font-bold text-[#D7DADC]">{formatNum(data.upvotes)}</span>
          <button className="text-[#818384] hover:text-[#7193FF] transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 20l8-8h-5V4H9v8H4z"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 py-2 px-2">
          {/* Meta */}
          <div className="flex items-center gap-1 text-xs mb-1.5">
            <div className="w-5 h-5 rounded-full bg-[#FF4500] flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">
              r/
            </div>
            <span className="font-bold text-xs text-[#D7DADC] hover:underline cursor-pointer">
              r/{data.subreddit}
            </span>
            <span className="text-[#818384]">•</span>
            <span className="text-[#818384]">
              Posted by u/{data.username}
            </span>
            <span className="text-[#818384]">{data.timeAgo}</span>
            {data.awards > 0 && (
              <>
                <span className="text-[#818384]">•</span>
                <span className="text-yellow-500">🏅 {data.awards}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-medium leading-snug mb-1.5">
            {data.title}
          </h3>

          {/* Content */}
          {data.content && (
            <div className="text-sm leading-relaxed text-[#D7DADC]/90 mb-2 whitespace-pre-wrap">
              {data.content}
            </div>
          )}

          {/* Media */}
          {data.hasMedia && (
            <div className="w-full h-[300px] bg-[#272729] rounded flex items-center justify-center mb-2">
              <div className="text-center text-[#818384]">
                <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                </svg>
                <span className="text-xs">Media</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-1 -ml-1">
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-sm text-xs font-bold text-[#818384] hover:bg-[#343536] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              {formatNum(data.commentCount)} Comments
            </button>
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-sm text-xs font-bold text-[#818384] hover:bg-[#343536] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
              </svg>
              Share
            </button>
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-sm text-xs font-bold text-[#818384] hover:bg-[#343536] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
              </svg>
              Save
            </button>
            <button className="flex items-center gap-1 px-2 py-1.5 rounded-sm text-xs font-bold text-[#818384] hover:bg-[#343536] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="6" cy="12" r="1.5"/>
                <circle cx="18" cy="12" r="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
