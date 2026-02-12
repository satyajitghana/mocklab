import type { Platform, PlatformConfig } from "./types";

export const platformConfigs: PlatformConfig[] = [
  // ── Social Posts ──
  {
    id: "x-post",
    name: "X (Twitter)",
    category: "social",
    icon: "𝕏",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "displayName", label: "Display Name", placeholder: "Elon Musk" },
          { type: "text", key: "handle", label: "Handle", placeholder: "elonmusk" },
          {
            type: "select",
            key: "verified",
            label: "Verification",
            options: [
              { value: "none", label: "None" },
              { value: "blue", label: "Blue" },
              { value: "gold", label: "Gold (Org)" },
              { value: "grey", label: "Grey (Gov)" },
            ],
          },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "content", label: "Post Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
          { type: "text", key: "timestamp", label: "Timestamp", placeholder: "3:42 PM · Jan 15, 2025" },
          { type: "text", key: "client", label: "Client", placeholder: "X for iPhone" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likes", label: "Likes", min: 0 },
          { type: "number", key: "retweets", label: "Reposts", min: 0 },
          { type: "number", key: "replies", label: "Replies", min: 0 },
          { type: "number", key: "bookmarks", label: "Bookmarks", min: 0 },
          { type: "number", key: "views", label: "Views", min: 0 },
        ],
      },
      {
        title: "Appearance",
        fields: [
          {
            type: "select",
            key: "theme",
            label: "Theme",
            options: [
              { value: "dark", label: "Dark" },
              { value: "dim", label: "Dim" },
              { value: "light", label: "Light" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "linkedin-post",
    name: "LinkedIn",
    category: "social",
    icon: "in",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "name", label: "Name" },
          { type: "text", key: "headline", label: "Headline" },
          {
            type: "select",
            key: "connectionDegree",
            label: "Connection",
            options: [
              { value: "1st", label: "1st" },
              { value: "2nd", label: "2nd" },
              { value: "3rd", label: "3rd" },
            ],
          },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "content", label: "Post Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2h" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "reactionCount", label: "Reactions", min: 0 },
          { type: "number", key: "commentCount", label: "Comments", min: 0 },
          { type: "number", key: "repostCount", label: "Reposts", min: 0 },
        ],
      },
    ],
  },
  {
    id: "instagram-post",
    name: "Instagram Post",
    category: "social",
    icon: "📷",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "verified", label: "Verified" },
          { type: "text", key: "location", label: "Location", placeholder: "New York, NY" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "caption", label: "Caption" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2 hours ago" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likeCount", label: "Likes", min: 0 },
          { type: "text", key: "likedByUser", label: "Liked By User", placeholder: "username" },
          { type: "number", key: "commentCount", label: "Comments", min: 0 },
        ],
      },
    ],
  },
  {
    id: "instagram-story",
    name: "Instagram Story",
    category: "social",
    icon: "◯",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "verified", label: "Verified" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2h" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "storyText", label: "Story Text" },
          { type: "color", key: "bgColor", label: "Background Color" },
        ],
      },
      {
        title: "Stats",
        fields: [{ type: "number", key: "viewerCount", label: "Viewers", min: 0 }],
      },
    ],
  },
  {
    id: "reddit-post",
    name: "Reddit",
    category: "social",
    icon: "r/",
    sections: [
      {
        title: "Post Info",
        fields: [
          { type: "text", key: "subreddit", label: "Subreddit", placeholder: "programming" },
          { type: "text", key: "username", label: "Username" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "5h" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "text", key: "title", label: "Title" },
          { type: "textarea", key: "content", label: "Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "upvotes", label: "Upvotes", min: 0 },
          { type: "number", key: "commentCount", label: "Comments", min: 0 },
          { type: "number", key: "awards", label: "Awards", min: 0 },
        ],
      },
    ],
  },
  {
    id: "facebook-post",
    name: "Facebook",
    category: "social",
    icon: "f",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "name", label: "Name" },
          { type: "switch", key: "verified", label: "Verified" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "3h" },
          {
            type: "select",
            key: "privacy",
            label: "Privacy",
            options: [
              { value: "public", label: "Public" },
              { value: "friends", label: "Friends" },
              { value: "only-me", label: "Only Me" },
            ],
          },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "content", label: "Post Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
        ],
      },
      {
        title: "Reactions",
        fields: [
          { type: "number", key: "likeCount", label: "Likes", min: 0 },
          { type: "number", key: "loveCount", label: "Love", min: 0 },
          { type: "number", key: "hahaCount", label: "Haha", min: 0 },
          { type: "number", key: "commentCount", label: "Comments", min: 0 },
          { type: "number", key: "shareCount", label: "Shares", min: 0 },
        ],
      },
    ],
  },
  {
    id: "threads-post",
    name: "Threads",
    category: "social",
    icon: "@",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "verified", label: "Verified" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "4h" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "content", label: "Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likeCount", label: "Likes", min: 0 },
          { type: "number", key: "replyCount", label: "Replies", min: 0 },
          { type: "number", key: "repostCount", label: "Reposts", min: 0 },
        ],
      },
    ],
  },
  {
    id: "youtube-comment",
    name: "YouTube Comment",
    category: "social",
    icon: "▶",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "channelName", label: "Channel Name" },
          { type: "switch", key: "isVerified", label: "Verified" },
        ],
      },
      {
        title: "Comment",
        fields: [
          { type: "textarea", key: "comment", label: "Comment" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2 days ago" },
          { type: "switch", key: "isPinned", label: "Pinned" },
          { type: "switch", key: "isHearted", label: "Hearted by Creator" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likes", label: "Likes", min: 0 },
          { type: "number", key: "replyCount", label: "Replies", min: 0 },
        ],
      },
    ],
  },
  {
    id: "tiktok-comment",
    name: "TikTok Comment",
    category: "social",
    icon: "♪",
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "verified", label: "Verified" },
        ],
      },
      {
        title: "Comment",
        fields: [
          { type: "textarea", key: "comment", label: "Comment" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "1d" },
          { type: "switch", key: "isPinned", label: "Pinned" },
          { type: "switch", key: "isCreatorLiked", label: "Creator Liked" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likes", label: "Likes", min: 0 },
          { type: "number", key: "replyCount", label: "Replies", min: 0 },
        ],
      },
    ],
  },
  // ── Chat ──
  {
    id: "whatsapp-chat",
    name: "WhatsApp",
    category: "chat",
    icon: "💬",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", key: "contactName", label: "Contact Name" },
          { type: "switch", key: "isOnline", label: "Online" },
          { type: "text", key: "lastSeen", label: "Last Seen", placeholder: "today at 2:30 PM" },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: {
              textKey: "text",
              timeKey: "time",
              sentKey: "sent",
              statusKey: "status",
            },
          },
        ],
      },
    ],
  },
  {
    id: "whatsapp-group",
    name: "WhatsApp Group",
    category: "chat",
    icon: "👥",
    sections: [
      {
        title: "Group",
        fields: [
          { type: "text", key: "groupName", label: "Group Name" },
          { type: "number", key: "participantCount", label: "Participants", min: 2 },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: {
              textKey: "text",
              senderKey: "sender",
              senderColorKey: "senderColor",
              timeKey: "time",
              isMeKey: "isMe",
              statusKey: "status",
            },
          },
        ],
      },
    ],
  },
  {
    id: "instagram-dm",
    name: "Instagram DM",
    category: "chat",
    icon: "✉",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "isActive", label: "Active Now" },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: { textKey: "text", timeKey: "time", sentKey: "sent" },
          },
        ],
      },
    ],
  },
  {
    id: "telegram-chat",
    name: "Telegram",
    category: "chat",
    icon: "✈",
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", key: "contactName", label: "Contact Name" },
          { type: "text", key: "lastSeen", label: "Last Seen", placeholder: "last seen recently" },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: {
              textKey: "text",
              timeKey: "time",
              sentKey: "sent",
              statusKey: "status",
            },
          },
        ],
      },
    ],
  },
  {
    id: "slack-message",
    name: "Slack",
    category: "chat",
    icon: "#",
    sections: [
      {
        title: "Channel",
        fields: [
          { type: "text", key: "channelName", label: "Channel Name", placeholder: "general" },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: { textKey: "text", senderKey: "username", timeKey: "time" },
          },
        ],
      },
    ],
  },
  {
    id: "discord-message",
    name: "Discord",
    category: "chat",
    icon: "🎮",
    sections: [
      {
        title: "Server",
        fields: [
          { type: "text", key: "serverName", label: "Server Name" },
          { type: "text", key: "channelName", label: "Channel", placeholder: "general" },
        ],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: {
              textKey: "text",
              senderKey: "username",
              timeKey: "time",
            },
          },
        ],
      },
    ],
  },
  {
    id: "imessage-chat",
    name: "iMessage",
    category: "chat",
    icon: "💭",
    sections: [
      {
        title: "Contact",
        fields: [{ type: "text", key: "contactName", label: "Contact Name" }],
      },
      {
        title: "Messages",
        fields: [
          {
            type: "messages",
            key: "messages",
            label: "Messages",
            messageFields: { textKey: "text", timeKey: "time", sentKey: "sent" },
          },
        ],
      },
    ],
  },
  // ── Email ──
  {
    id: "gmail-email",
    name: "Gmail",
    category: "email",
    icon: "📧",
    sections: [
      {
        title: "Email Info",
        fields: [
          { type: "text", key: "from", label: "From Name" },
          { type: "text", key: "fromEmail", label: "From Email" },
          { type: "text", key: "to", label: "To Name" },
          { type: "text", key: "toEmail", label: "To Email" },
          { type: "text", key: "subject", label: "Subject" },
          { type: "text", key: "date", label: "Date" },
          { type: "switch", key: "isStarred", label: "Starred" },
        ],
      },
      {
        title: "Body",
        fields: [{ type: "textarea", key: "body", label: "Email Body" }],
      },
    ],
  },
];

export const platformMap = new Map<Platform, PlatformConfig>(
  platformConfigs.map((p) => [p.id, p])
);
