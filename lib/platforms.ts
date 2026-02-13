import type { PlatformConfig } from "./types";
import { platformIcons } from "./platform-icons";

const themeField = {
  type: "select" as const,
  key: "theme",
  label: "Theme",
  options: [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
  ],
};

const xThemeField = {
  type: "select" as const,
  key: "theme",
  label: "Theme",
  options: [
    { value: "dark", label: "Dark" },
    { value: "dim", label: "Dim" },
    { value: "light", label: "Light" },
  ],
};

export const platformConfigs: PlatformConfig[] = [
  // ── Social Posts ──
  {
    id: "x-post",
    name: "X (Twitter)",
    category: "social",
    icon: platformIcons["x-post"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
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
        fields: [xThemeField],
      },
    ],
  },
  {
    id: "linkedin-post",
    name: "LinkedIn",
    category: "social",
    icon: platformIcons["linkedin-post"],
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
          { type: "switch", key: "isPromoted", label: "Promoted" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "content", label: "Post Content" },
          { type: "switch", key: "hasMedia", label: "Has Media" },
          { type: "image", key: "mediaUrl", label: "Upload Media" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2h" },
        ],
      },
      {
        title: "Reactions",
        fields: [
          { type: "number", key: "likeCount", label: "Like", min: 0 },
          { type: "number", key: "celebrateCount", label: "Celebrate", min: 0 },
          { type: "number", key: "supportCount", label: "Support", min: 0 },
          { type: "number", key: "loveCount", label: "Love", min: 0 },
          { type: "number", key: "insightfulCount", label: "Insightful", min: 0 },
          { type: "number", key: "funnyCount", label: "Funny", min: 0 },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "commentCount", label: "Comments", min: 0 },
          { type: "number", key: "repostCount", label: "Reposts", min: 0 },
        ],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "instagram-post",
    name: "Instagram Post",
    category: "social",
    group: "Instagram",
    icon: platformIcons["instagram-post"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "instagram-story",
    name: "Instagram Story",
    category: "social",
    group: "Instagram",
    icon: platformIcons["instagram-story"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
          { type: "textarea", key: "storyText", label: "Story Text" },
          { type: "color", key: "bgColor", label: "Background Color" },
        ],
      },
      {
        title: "Stats",
        fields: [{ type: "number", key: "viewerCount", label: "Viewers", min: 0 }],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "facebook-post",
    name: "Facebook",
    category: "social",
    icon: platformIcons["facebook-post"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "reddit-post",
    name: "Reddit",
    category: "social",
    icon: platformIcons["reddit-post"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "threads-post",
    name: "Threads",
    category: "social",
    icon: platformIcons["threads-post"],
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
          { type: "image", key: "mediaUrl", label: "Upload Media" },
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "youtube-comment",
    name: "YouTube Comment",
    category: "social",
    group: "YouTube",
    icon: platformIcons["youtube-comment"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "youtube-post",
    name: "YouTube Video",
    category: "social",
    group: "YouTube",
    icon: platformIcons["youtube-post"],
    sections: [
      {
        title: "Video",
        fields: [
          { type: "text", key: "videoTitle", label: "Video Title" },
          { type: "image", key: "mediaUrl", label: "Video Thumbnail" },
          { type: "switch", key: "hasMedia", label: "Show Thumbnail" },
          { type: "slider", key: "videoPosition", label: "Video Position", min: 0, max: 100, step: 1 },
          { type: "text", key: "videoDuration", label: "Duration", placeholder: "12:34" },
          { type: "text", key: "currentTime", label: "Current Time", placeholder: "5:42" },
        ],
      },
      {
        title: "Channel",
        fields: [
          { type: "text", key: "channelName", label: "Channel Name" },
          { type: "switch", key: "channelVerified", label: "Verified" },
          { type: "number", key: "subscriberCount", label: "Subscribers", min: 0 },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "viewCount", label: "Views", min: 0 },
          { type: "number", key: "likeCount", label: "Likes", min: 0 },
          { type: "text", key: "timeAgo", label: "Published", placeholder: "2 weeks ago" },
          { type: "textarea", key: "description", label: "Description" },
        ],
      },
      {
        title: "Comments",
        fields: [
          { type: "number", key: "commentCount", label: "Comment Count", min: 0 },
          {
            type: "messages",
            key: "comments",
            label: "Comments",
            messageFields: {
              textKey: "text",
              senderKey: "username",
              timeKey: "timeAgo",
              likesKey: "likes",
            },
          },
        ],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "tiktok-comment",
    name: "TikTok Comment",
    category: "social",
    group: "TikTok",
    icon: platformIcons["tiktok-comment"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "tiktok-post",
    name: "TikTok Video",
    category: "social",
    group: "TikTok",
    icon: platformIcons["tiktok-post"],
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "switch", key: "verified", label: "Verified" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "textarea", key: "caption", label: "Caption" },
          { type: "image", key: "mediaUrl", label: "Video Thumbnail" },
          { type: "switch", key: "hasMedia", label: "Show Thumbnail" },
        ],
      },
      {
        title: "Music",
        fields: [
          { type: "text", key: "musicName", label: "Song Name", placeholder: "Original Sound" },
          { type: "text", key: "musicAuthor", label: "Music Author", placeholder: "username" },
        ],
      },
      {
        title: "Engagement",
        fields: [
          { type: "number", key: "likes", label: "Likes", min: 0 },
          { type: "number", key: "comments", label: "Comments", min: 0 },
          { type: "number", key: "shares", label: "Shares", min: 0 },
          { type: "number", key: "bookmarks", label: "Bookmarks", min: 0 },
        ],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  // ── Chat ──
  {
    id: "whatsapp-chat",
    name: "WhatsApp",
    category: "chat",
    group: "WhatsApp",
    icon: platformIcons["whatsapp-chat"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "whatsapp-group",
    name: "WhatsApp Group",
    category: "chat",
    group: "WhatsApp",
    icon: platformIcons["whatsapp-group"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "instagram-dm",
    name: "Instagram DM",
    category: "chat",
    group: "Instagram",
    icon: platformIcons["instagram-dm"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "telegram-chat",
    name: "Telegram",
    category: "chat",
    icon: platformIcons["telegram-chat"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "slack-message",
    name: "Slack",
    category: "chat",
    icon: platformIcons["slack-message"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "discord-message",
    name: "Discord",
    category: "chat",
    icon: platformIcons["discord-message"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "imessage-chat",
    name: "iMessage",
    category: "chat",
    icon: platformIcons["imessage-chat"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "snapchat-snap",
    name: "Snapchat Snap",
    category: "chat",
    group: "Snapchat",
    icon: platformIcons["snapchat-snap"],
    sections: [
      {
        title: "Profile",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "text", key: "displayName", label: "Display Name" },
          { type: "text", key: "timeAgo", label: "Time Ago", placeholder: "2h ago" },
        ],
      },
      {
        title: "Content",
        fields: [
          { type: "image", key: "mediaUrl", label: "Upload Snap" },
          { type: "switch", key: "hasMedia", label: "Show Media" },
          { type: "textarea", key: "snapText", label: "Snap Text" },
          { type: "color", key: "bgColor", label: "Background Color" },
          { type: "number", key: "timer", label: "Timer (seconds)", min: 1, max: 10 },
        ],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  {
    id: "snapchat-dm",
    name: "Snapchat DM",
    category: "chat",
    group: "Snapchat",
    icon: platformIcons["snapchat-dm"],
    sections: [
      {
        title: "Contact",
        fields: [
          { type: "text", key: "username", label: "Username" },
          { type: "text", key: "displayName", label: "Display Name" },
          { type: "number", key: "streak", label: "Streak", min: 0 },
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
              isSnapKey: "isSnap",
            },
          },
        ],
      },
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
  // ── Email ──
  {
    id: "gmail-email",
    name: "Gmail",
    category: "email",
    icon: platformIcons["gmail-email"],
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
      {
        title: "Appearance",
        fields: [themeField],
      },
    ],
  },
];

export const platformMap = new Map(
  platformConfigs.map((p) => [p.id, p])
);
