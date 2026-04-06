

# IPTV Premium Streaming Website

## Overview
Build a Netflix-inspired, dark-themed IPTV subscription website with cinematic design, glassmorphism effects, smooth animations, and rich content sections.

## Sections to Build

### 1. Hero Section
- Fullscreen video background (autoplay, muted, loop) with dark overlay
- Fallback image on mobile
- Title: "IPTV Streaming Experience" with gradient text
- Subtitle + WhatsApp CTA button (https://wa.me/966565662037)
- Floating particle/glow background effects

### 2. Features Section
- 4 feature cards: High Quality Streaming, Fast Servers, Multi-device Support, 24/7 Support
- Glassmorphism cards with glow borders on hover, 3D tilt effect

### 3. Subscription Plans Section
- 8 brand cards: Falcon, Hulk The German, Vulture, Alfa, Shark, Gulfar, Universe, NWE 4K
- No prices — each with premium description, futuristic card UI, hover scale+glow
- WhatsApp CTA on each card

### 4. Content Showcase (Netflix-style)
- Horizontal scrollable rows: Movies, Series, Sports, Kids/Family
- Reusable `ContentRow` and `ContentCard` components
- Poster cards with hover scale, glow, play icon overlay
- Placeholder images via picsum/unsplash

### 5. About / Technology Section
- IPTV technology explanation with animated icons
- Focus on performance, stability, global access

### 6. Testimonials Section
- User reviews carousel with avatars
- Auto-scroll with smooth transitions

### 7. Footer
- WhatsApp link, copyright, nav links
- Dark minimal with glow accents

## Design System
- **Background**: Deep black (#0a0a0a) / dark gray
- **Accent**: Orange/gold gradients (primary), teal highlights
- **Effects**: Glassmorphism, neon glow, gradient borders, shadows
- **Cards**: Rounded-2xl, backdrop-blur

## Animations
- Fade-in on scroll (CSS intersection observer)
- Card hover lift + glow
- Button scale/ripple effects
- Floating background elements
- Smooth scrolling throughout

## Components Structure
- `HeroSection` — video bg + CTA
- `FeaturesSection` — feature cards grid
- `PlansSection` — brand subscription cards
- `ContentShowcase` — Netflix rows
- `ContentRow` / `ContentCard` — reusable
- `AboutSection` — technology info
- `TestimonialsSection` — review carousel
- `Footer` — contact + links
- `Navbar` — sticky dark nav with mobile hamburger

## Responsiveness
- Mobile-first with hamburger nav
- Video disabled on mobile (image fallback)
- Horizontal scroll optimized for touch
- Adaptive typography and spacing

