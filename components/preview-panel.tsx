"use client";

import { forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Platform, AllPlatformData } from "@/lib/types";
import { XPostPreview } from "@/components/mockups/x-post";
import { LinkedInPostPreview } from "@/components/mockups/linkedin-post";
import { InstagramPostPreview } from "@/components/mockups/instagram-post";
import { InstagramStoryPreview } from "@/components/mockups/instagram-story";
import { RedditPostPreview } from "@/components/mockups/reddit-post";
import { WhatsAppChatPreview } from "@/components/mockups/whatsapp-chat";
import { WhatsAppGroupPreview } from "@/components/mockups/whatsapp-group-chat";
import { InstagramDMPreview } from "@/components/mockups/instagram-dm";
import { TelegramChatPreview } from "@/components/mockups/telegram-chat";
import { SlackChatPreview } from "@/components/mockups/slack-chat";
import { GmailEmailPreview } from "@/components/mockups/gmail-email";
import { YouTubeCommentPreview } from "@/components/mockups/youtube-comment";
import { FacebookPostPreview } from "@/components/mockups/facebook-post";
import { DiscordMessagePreview } from "@/components/mockups/discord-message";
import { ThreadsPostPreview } from "@/components/mockups/threads-post";
import { TikTokCommentPreview } from "@/components/mockups/tiktok-comment";
import { IMessageChatPreview } from "@/components/mockups/imessage-chat";

interface PreviewPanelProps {
  platform: Platform;
  data: AllPlatformData;
}

export const PreviewPanel = forwardRef<HTMLDivElement, PreviewPanelProps>(
  function PreviewPanel({ platform, data }, ref) {
    function renderPreview() {
      switch (platform) {
        case "x-post":
          return <XPostPreview data={data["x-post"]} />;
        case "linkedin-post":
          return <LinkedInPostPreview data={data["linkedin-post"]} />;
        case "instagram-post":
          return <InstagramPostPreview data={data["instagram-post"]} />;
        case "instagram-story":
          return <InstagramStoryPreview data={data["instagram-story"]} />;
        case "reddit-post":
          return <RedditPostPreview data={data["reddit-post"]} />;
        case "whatsapp-chat":
          return <WhatsAppChatPreview data={data["whatsapp-chat"]} />;
        case "whatsapp-group":
          return <WhatsAppGroupPreview data={data["whatsapp-group"]} />;
        case "instagram-dm":
          return <InstagramDMPreview data={data["instagram-dm"]} />;
        case "telegram-chat":
          return <TelegramChatPreview data={data["telegram-chat"]} />;
        case "slack-message":
          return <SlackChatPreview data={data["slack-message"]} />;
        case "gmail-email":
          return <GmailEmailPreview data={data["gmail-email"]} />;
        case "youtube-comment":
          return <YouTubeCommentPreview data={data["youtube-comment"]} />;
        case "facebook-post":
          return <FacebookPostPreview data={data["facebook-post"]} />;
        case "discord-message":
          return <DiscordMessagePreview data={data["discord-message"]} />;
        case "threads-post":
          return <ThreadsPostPreview data={data["threads-post"]} />;
        case "tiktok-comment":
          return <TikTokCommentPreview data={data["tiktok-comment"]} />;
        case "imessage-chat":
          return <IMessageChatPreview data={data["imessage-chat"]} />;
        default:
          return null;
      }
    }

    return (
      <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={platform}
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {renderPreview()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);
