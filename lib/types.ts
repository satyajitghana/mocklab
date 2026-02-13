import type { ReactNode } from "react";

export type Platform =
  | "x-post"
  | "linkedin-post"
  | "instagram-post"
  | "instagram-story"
  | "reddit-post"
  | "whatsapp-chat"
  | "whatsapp-group"
  | "instagram-dm"
  | "telegram-chat"
  | "slack-message"
  | "gmail-email"
  | "youtube-comment"
  | "youtube-post"
  | "facebook-post"
  | "discord-message"
  | "threads-post"
  | "tiktok-comment"
  | "tiktok-post"
  | "imessage-chat"
  | "snapchat-snap"
  | "snapchat-dm";

// ── X (Twitter) ──
export interface XPostData {
  displayName: string;
  handle: string;
  verified: "none" | "blue" | "gold" | "grey";
  content: string;
  hasMedia: boolean;
  mediaUrl: string;
  timestamp: string;
  client: string;
  likes: number;
  retweets: number;
  replies: number;
  bookmarks: number;
  views: number;
  theme: "light" | "dim" | "dark";
}

// ── LinkedIn ──
export interface LinkedInPostData {
  name: string;
  headline: string;
  connectionDegree: "1st" | "2nd" | "3rd";
  isPromoted: boolean;
  content: string;
  hasMedia: boolean;
  mediaUrl: string;
  timeAgo: string;
  likeCount: number;
  celebrateCount: number;
  supportCount: number;
  loveCount: number;
  insightfulCount: number;
  funnyCount: number;
  commentCount: number;
  repostCount: number;
  theme: "light" | "dark";
}

// ── Instagram Post ──
export interface InstagramPostData {
  username: string;
  verified: boolean;
  location: string;
  mediaUrl: string;
  likeCount: number;
  likedByUser: string;
  caption: string;
  commentCount: number;
  timeAgo: string;
  theme: "light" | "dark";
}

// ── Instagram Story ──
export interface InstagramStoryData {
  username: string;
  verified: boolean;
  timeAgo: string;
  mediaUrl: string;
  viewerCount: number;
  bgColor: string;
  storyText: string;
  theme: "light" | "dark";
}

// ── Reddit ──
export interface RedditPostData {
  subreddit: string;
  username: string;
  timeAgo: string;
  title: string;
  content: string;
  hasMedia: boolean;
  mediaUrl: string;
  upvotes: number;
  commentCount: number;
  awards: number;
  theme: "light" | "dark";
}

// ── WhatsApp Chat ──
export interface WhatsAppMessage {
  id: string;
  text: string;
  sent: boolean;
  time: string;
  status: "sent" | "delivered" | "read";
}

export interface WhatsAppChatData {
  contactName: string;
  isOnline: boolean;
  lastSeen: string;
  messages: WhatsAppMessage[];
  theme: "light" | "dark";
}

// ── WhatsApp Group ──
export interface WhatsAppGroupMessage {
  id: string;
  text: string;
  sender: string;
  senderColor: string;
  time: string;
  status: "sent" | "delivered" | "read";
  isMe: boolean;
}

export interface WhatsAppGroupData {
  groupName: string;
  participantCount: number;
  messages: WhatsAppGroupMessage[];
  theme: "light" | "dark";
}

// ── Instagram DM ──
export interface InstagramDMMessage {
  id: string;
  text: string;
  sent: boolean;
  time: string;
}

export interface InstagramDMData {
  username: string;
  isActive: boolean;
  messages: InstagramDMMessage[];
  theme: "light" | "dark";
}

// ── Telegram ──
export interface TelegramMessage {
  id: string;
  text: string;
  sent: boolean;
  time: string;
  status: "sent" | "delivered" | "read";
}

export interface TelegramChatData {
  contactName: string;
  lastSeen: string;
  messages: TelegramMessage[];
  theme: "light" | "dark";
}

// ── Slack ──
export interface SlackReaction {
  emoji: string;
  count: number;
}

export interface SlackMsg {
  id: string;
  username: string;
  text: string;
  time: string;
  reactions: SlackReaction[];
}

export interface SlackMessageData {
  channelName: string;
  messages: SlackMsg[];
  theme: "light" | "dark";
}

// ── Gmail ──
export interface GmailEmailData {
  from: string;
  fromEmail: string;
  to: string;
  toEmail: string;
  subject: string;
  date: string;
  body: string;
  isStarred: boolean;
  labels: string[];
  theme: "light" | "dark";
}

// ── YouTube Comment ──
export interface YouTubeCommentData {
  channelName: string;
  comment: string;
  likes: number;
  timeAgo: string;
  replyCount: number;
  isPinned: boolean;
  isHearted: boolean;
  isVerified: boolean;
  theme: "light" | "dark";
}

// ── YouTube Post ──
export interface YouTubeComment {
  id: string;
  username: string;
  text: string;
  likes: number;
  timeAgo: string;
  isHearted: boolean;
}

export interface YouTubePostData {
  videoTitle: string;
  channelName: string;
  channelVerified: boolean;
  subscriberCount: number;
  viewCount: number;
  likeCount: number;
  timeAgo: string;
  description: string;
  hasMedia: boolean;
  mediaUrl: string;
  videoPosition: number;
  videoDuration: string;
  currentTime: string;
  commentCount: number;
  comments: YouTubeComment[];
  theme: "light" | "dark";
}

// ── Facebook ──
export interface FacebookPostData {
  name: string;
  verified: boolean;
  timeAgo: string;
  privacy: "public" | "friends" | "only-me";
  content: string;
  hasMedia: boolean;
  mediaUrl: string;
  likeCount: number;
  loveCount: number;
  hahaCount: number;
  commentCount: number;
  shareCount: number;
  theme: "light" | "dark";
}

// ── Discord ──
export interface DiscordMsg {
  id: string;
  username: string;
  roleColor: string;
  isBot: boolean;
  text: string;
  time: string;
  reactions: { emoji: string; count: number }[];
}

export interface DiscordMessageData {
  serverName: string;
  channelName: string;
  messages: DiscordMsg[];
  theme: "light" | "dark";
}

// ── Threads ──
export interface ThreadsPostData {
  username: string;
  verified: boolean;
  content: string;
  hasMedia: boolean;
  mediaUrl: string;
  likeCount: number;
  replyCount: number;
  repostCount: number;
  timeAgo: string;
  theme: "light" | "dark";
}

// ── TikTok Comment ──
export interface TikTokCommentData {
  username: string;
  verified: boolean;
  comment: string;
  likes: number;
  timeAgo: string;
  replyCount: number;
  isCreatorLiked: boolean;
  isPinned: boolean;
  theme: "light" | "dark";
}

// ── TikTok Post ──
export interface TikTokPostData {
  username: string;
  verified: boolean;
  caption: string;
  musicName: string;
  musicAuthor: string;
  hasMedia: boolean;
  mediaUrl: string;
  likes: number;
  comments: number;
  shares: number;
  bookmarks: number;
  theme: "light" | "dark";
}

// ── iMessage ──
export interface IMessageMsg {
  id: string;
  text: string;
  sent: boolean;
  time: string;
}

export interface IMessageChatData {
  contactName: string;
  messages: IMessageMsg[];
  theme: "light" | "dark";
}

// ── Snapchat Snap ──
export interface SnapchatSnapData {
  username: string;
  displayName: string;
  timeAgo: string;
  hasMedia: boolean;
  mediaUrl: string;
  bgColor: string;
  snapText: string;
  timer: number;
  theme: "light" | "dark";
}

// ── Snapchat DM ──
export interface SnapchatDMMessage {
  id: string;
  text: string;
  sent: boolean;
  time: string;
  isSnap: boolean;
}

export interface SnapchatDMData {
  username: string;
  displayName: string;
  streak: number;
  messages: SnapchatDMMessage[];
  theme: "light" | "dark";
}

// ── Aggregated state ──
export interface AllPlatformData {
  "x-post": XPostData;
  "linkedin-post": LinkedInPostData;
  "instagram-post": InstagramPostData;
  "instagram-story": InstagramStoryData;
  "reddit-post": RedditPostData;
  "whatsapp-chat": WhatsAppChatData;
  "whatsapp-group": WhatsAppGroupData;
  "instagram-dm": InstagramDMData;
  "telegram-chat": TelegramChatData;
  "slack-message": SlackMessageData;
  "gmail-email": GmailEmailData;
  "youtube-comment": YouTubeCommentData;
  "youtube-post": YouTubePostData;
  "facebook-post": FacebookPostData;
  "discord-message": DiscordMessageData;
  "threads-post": ThreadsPostData;
  "tiktok-comment": TikTokCommentData;
  "tiktok-post": TikTokPostData;
  "imessage-chat": IMessageChatData;
  "snapchat-snap": SnapchatSnapData;
  "snapchat-dm": SnapchatDMData;
}

// ── Editor field config ──
export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "switch"
  | "select"
  | "slider"
  | "color"
  | "messages"
  | "image";

export interface EditorField {
  type: FieldType;
  key: string;
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  accept?: string;
  messageFields?: {
    textKey: string;
    senderKey?: string;
    timeKey: string;
    sentKey?: string;
    statusKey?: string;
    senderColorKey?: string;
    isMeKey?: string;
    likesKey?: string;
    isSnapKey?: string;
  };
}

export interface EditorSection {
  title: string;
  fields: EditorField[];
}

export interface PlatformConfig {
  id: Platform;
  name: string;
  category: "social" | "chat" | "email";
  group?: string;
  icon: ReactNode;
  sections: EditorSection[];
}
