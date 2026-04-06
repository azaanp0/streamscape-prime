import { Play, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video / Fallback */}
      {!isMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1574375927938-d5a98e8d6f20?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-watching-tv-at-night-3403/1080p.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574375927938-d5a98e8d6f20?w=1080&q=80')",
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <Play className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Premium Streaming Platform</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-gradient-gold">IPTV</span>{" "}
          <span className="text-foreground">Streaming</span>
          <br />
          <span className="text-foreground">Experience</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Premium subscriptions for unlimited entertainment. Access thousands of channels, movies, and series worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/966565662037"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform duration-300 glow-orange"
          >
            <MessageCircle className="h-5 w-5" />
            Contact via WhatsApp
          </a>
          <a
            href="#plans"
            className="inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
