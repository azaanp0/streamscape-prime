import { Globe, Gauge, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Gauge, title: "Performance", desc: "Ultra-fast streaming powered by optimized CDN infrastructure for buffer-free playback." },
  { icon: Shield, title: "Stability", desc: "Enterprise-grade servers with 99.9% uptime guarantee and automatic failover." },
  { icon: Globe, title: "Global Access", desc: "Connect from anywhere in the world with our distributed global network." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powered by <span className="text-gradient-gold">Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IPTV uses Internet Protocol to deliver television content over your broadband connection,
            providing superior quality and flexibility compared to traditional broadcasting.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-8 text-center gradient-border hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
