import type { AllPlatformData } from "./types";

export const defaults: AllPlatformData = {
  "x-post": {
    displayName: "Elon Musk",
    handle: "elonmusk",
    verified: "blue",
    content:
      "Just mass deleted all my old tweets. Fresh start. The future is unwritten. 🚀",
    hasMedia: false,
    mediaUrl: "",
    timestamp: "3:42 PM · Jan 15, 2025",
    client: "X for iPhone",
    likes: 284200,
    retweets: 42800,
    replies: 18300,
    bookmarks: 12400,
    views: 48200000,
    theme: "dark",
  },

  "linkedin-post": {
    name: "Satya Nadella",
    headline: "Chairman and CEO at Microsoft",
    connectionDegree: "1st",
    content:
      "Excited to share that we're making AI accessible to every developer. The next wave of innovation starts with empowering builders everywhere.\n\nAt Microsoft, we believe technology should amplify human potential. That's why we're investing in tools that make it easier for anyone to build with AI.\n\n#AI #Microsoft #Innovation",
    hasMedia: false,
    mediaUrl: "",
    timeAgo: "2h",
    reactionCount: 24500,
    commentCount: 1842,
    repostCount: 3200,
  },

  "instagram-post": {
    username: "natgeo",
    verified: true,
    location: "Serengeti National Park",
    mediaUrl: "",
    likeCount: 892400,
    likedByUser: "photography_daily",
    caption:
      "A breathtaking sunset over the Serengeti plains, where the wild roams free. Nature's masterpiece unfolds every evening. 🌅",
    commentCount: 4231,
    timeAgo: "2 hours ago",
  },

  "instagram-story": {
    username: "mkbhd",
    verified: true,
    timeAgo: "2h",
    mediaUrl: "",
    viewerCount: 284000,
    bgColor: "#1a1a2e",
    storyText: "New tech just dropped 🔥",
  },

  "reddit-post": {
    subreddit: "programming",
    username: "code_wizard_42",
    timeAgo: "5h",
    title: "I built a fake social media post generator and it's actually useful",
    content:
      "After spending way too much time on this project, I finally have a tool that can generate realistic-looking social media posts for design mockups. It supports X, Instagram, LinkedIn, and more. What do you all think?",
    hasMedia: false,
    mediaUrl: "",
    upvotes: 15420,
    commentCount: 342,
    awards: 5,
  },

  "whatsapp-chat": {
    contactName: "Mom ❤️",
    isOnline: true,
    lastSeen: "today at 2:30 PM",
    messages: [
      {
        id: "1",
        text: "Hey sweetie, did you eat lunch?",
        sent: false,
        time: "2:15 PM",
        status: "read",
      },
      {
        id: "2",
        text: "Yes mom! Had pasta 🍝",
        sent: true,
        time: "2:18 PM",
        status: "read",
      },
      {
        id: "3",
        text: "Good! Don't forget to drink water",
        sent: false,
        time: "2:19 PM",
        status: "read",
      },
      {
        id: "4",
        text: "I will 😄 Love you!",
        sent: true,
        time: "2:20 PM",
        status: "delivered",
      },
    ],
  },

  "whatsapp-group": {
    groupName: "Weekend Plans 🎉",
    participantCount: 8,
    messages: [
      {
        id: "1",
        text: "Hey everyone! Are we still on for Saturday?",
        sender: "Alex",
        senderColor: "#25D366",
        time: "10:30 AM",
        status: "read",
        isMe: false,
      },
      {
        id: "2",
        text: "Yes! I'm bringing snacks 🍕",
        sender: "Sarah",
        senderColor: "#34B7F1",
        time: "10:32 AM",
        status: "read",
        isMe: false,
      },
      {
        id: "3",
        text: "Count me in! What time?",
        sender: "You",
        senderColor: "#7C3AED",
        time: "10:35 AM",
        status: "delivered",
        isMe: true,
      },
      {
        id: "4",
        text: "Let's meet at 6 PM at the usual spot",
        sender: "Alex",
        senderColor: "#25D366",
        time: "10:36 AM",
        status: "read",
        isMe: false,
      },
    ],
  },

  "instagram-dm": {
    username: "bestfriend_jane",
    isActive: true,
    messages: [
      { id: "1", text: "OMG did you see that new show??", sent: false, time: "8:42 PM" },
      { id: "2", text: "YES it's so good!! 😭", sent: true, time: "8:43 PM" },
      { id: "3", text: "We need to binge watch this weekend", sent: false, time: "8:44 PM" },
      { id: "4", text: "I'm literally free all Saturday, let's do it!", sent: true, time: "8:45 PM" },
    ],
  },

  "telegram-chat": {
    contactName: "David",
    lastSeen: "last seen recently",
    messages: [
      {
        id: "1",
        text: "Hey, did you check out that new API?",
        sent: false,
        time: "3:15 PM",
        status: "read",
      },
      {
        id: "2",
        text: "Yeah! The docs are really well written",
        sent: true,
        time: "3:18 PM",
        status: "read",
      },
      {
        id: "3",
        text: "Agreed. Want to pair program tomorrow?",
        sent: false,
        time: "3:20 PM",
        status: "read",
      },
      {
        id: "4",
        text: "Absolutely, let's do it 💪",
        sent: true,
        time: "3:21 PM",
        status: "delivered",
      },
    ],
  },

  "slack-message": {
    channelName: "general",
    messages: [
      {
        id: "1",
        username: "sarah.chen",
        text: "Hey team! 🎉 Just deployed the new feature to production. Everything looks good so far.",
        time: "10:32 AM",
        reactions: [
          { emoji: "🎉", count: 5 },
          { emoji: "🚀", count: 3 },
        ],
      },
      {
        id: "2",
        username: "mike.johnson",
        text: "Awesome work! I'll keep an eye on the metrics.",
        time: "10:34 AM",
        reactions: [{ emoji: "👍", count: 2 }],
      },
      {
        id: "3",
        username: "alex.dev",
        text: "The performance improvements are already showing. Great job everyone!",
        time: "10:38 AM",
        reactions: [],
      },
    ],
  },

  "gmail-email": {
    from: "Tim Cook",
    fromEmail: "tcook@apple.com",
    to: "You",
    toEmail: "you@example.com",
    subject: "Invitation: Apple Special Event",
    date: "Jan 15, 2025, 9:41 AM",
    body: "Dear Valued Guest,\n\nYou are cordially invited to our upcoming Apple Special Event on February 15, 2025.\n\nWe have some exciting announcements to share with you. This will be a virtual event streamed live from Apple Park.\n\nPlease RSVP at your earliest convenience.\n\nBest regards,\nTim Cook\nCEO, Apple Inc.",
    isStarred: true,
    labels: ["Important", "Events"],
  },

  "youtube-comment": {
    channelName: "TechReviewer",
    comment:
      "This is by far the best explanation I've seen on this topic. The way you broke down each concept made it so easy to understand. Keep up the amazing work! 🔥",
    likes: 4200,
    timeAgo: "2 days ago",
    replyCount: 23,
    isPinned: true,
    isHearted: true,
    isVerified: false,
  },

  "facebook-post": {
    name: "Mark Zuckerberg",
    verified: true,
    timeAgo: "3h",
    privacy: "public",
    content:
      "Excited to announce our latest AI research breakthrough. Meta AI is pushing the boundaries of what's possible with open-source models. The future of AI should be open and accessible to everyone.",
    hasMedia: false,
    mediaUrl: "",
    likeCount: 125000,
    loveCount: 18400,
    hahaCount: 2100,
    commentCount: 8420,
    shareCount: 15200,
  },

  "discord-message": {
    serverName: "Dev Community",
    channelName: "general",
    messages: [
      {
        id: "1",
        username: "ModBot",
        roleColor: "#5865F2",
        isBot: true,
        text: "Welcome to the server! Please read the rules in #rules.",
        time: "Today at 10:00 AM",
        reactions: [],
      },
      {
        id: "2",
        username: "CoolDev42",
        roleColor: "#57F287",
        isBot: false,
        text: "Hey everyone! Just joined. Excited to be here! 🎮",
        time: "Today at 10:15 AM",
        reactions: [
          { emoji: "👋", count: 4 },
          { emoji: "🎉", count: 2 },
        ],
      },
      {
        id: "3",
        username: "SeniorDev",
        roleColor: "#FEE75C",
        isBot: false,
        text: "Welcome! Feel free to ask anything in #help",
        time: "Today at 10:18 AM",
        reactions: [],
      },
    ],
  },

  "threads-post": {
    username: "zuck",
    verified: true,
    content:
      "Building for the next billion people. Threads is growing faster than we expected. Thanks for being here. 🙏",
    hasMedia: false,
    mediaUrl: "",
    likeCount: 342000,
    replyCount: 12400,
    repostCount: 8900,
    timeAgo: "4h",
  },

  "tiktok-comment": {
    username: "viralcreator",
    verified: true,
    comment: "This is the content I come to TikTok for 😂 Absolutely brilliant!",
    likes: 84200,
    timeAgo: "1d",
    replyCount: 156,
    isCreatorLiked: true,
    isPinned: true,
  },

  "imessage-chat": {
    contactName: "John",
    messages: [
      { id: "1", text: "Hey, are you free tonight?", sent: false, time: "6:30 PM" },
      { id: "2", text: "Yeah! What's up?", sent: true, time: "6:32 PM" },
      { id: "3", text: "Want to grab dinner? That new place downtown", sent: false, time: "6:33 PM" },
      { id: "4", text: "Sounds great! 7:30 work?", sent: true, time: "6:34 PM" },
      { id: "5", text: "Perfect, see you there! 🍕", sent: false, time: "6:35 PM" },
    ],
  },
};
