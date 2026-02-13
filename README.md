# MockLab — Social Media Mockup Generator

Create pixel-perfect social media mockups for 21+ platforms. Edit every detail on the left, see the live preview on the right, and download as PNG.

## Supported Platforms

**Social Posts:** X (Twitter), LinkedIn, Instagram Post, Instagram Story, Reddit, Facebook, Threads, YouTube Comment, YouTube Video, TikTok Comment, TikTok Video

**Chat Messages:** WhatsApp, WhatsApp Group, Instagram DM, Telegram, Slack, Discord, iMessage, Snapchat Snap, Snapchat DM

**Email:** Gmail

## Features

- Live preview with pixel-perfect mockups
- Dark and light theme support (app UI + every mockup)
- Full configurability (verified badges, reactions, timestamps, read receipts, etc.)
- Image/media upload for post mockups
- Collapsible sidebar for distraction-free preview
- Platform-grouped sidebar navigation with real brand icons
- YouTube video mockup with editable comments (add/remove/edit per-comment)
- TikTok video post with engagement metrics
- Snapchat snap view and DM chat
- Download as high-resolution PNG (2x pixel ratio)
- Smooth platform switching animations
- Chat message editor (add/remove/edit messages)

## Tech Stack

- **Next.js 16** with App Router & Turbopack
- **Tailwind CSS v4** + **shadcn/ui**
- **motion/react** for micro-animations
- **next-themes** for dark/light theme toggling
- **react-icons** for brand platform icons
- **html-to-image** for PNG export
- **Geist** font family + **Roboto** + **IBM Plex Sans** for platform-authentic rendering

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo & Favicon

MockLab uses a test-tube-diagonal icon (from Lucide) as its logo. The favicon renders as a black rounded square with the white test tube icon. The logo text "MockLab" is displayed in Geist Mono font.
