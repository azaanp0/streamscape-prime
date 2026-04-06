import { Zap, Server, Monitor, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Zap, title: "High Quality Streaming", desc: "Crystal-clear 4K resolution with zero buffering for the ultimate viewing experience." },
  { icon: Server, title: "Fast Servers", desc: "Lightning-fast global servers ensuring stable connections around the clock." },
  { icon: Monitor, title: "Multi-device Support", desc: "Watch on Smart TV, mobile, tablet, or PC — seamlessly across all your devices." },
  { icon: Headphones, title: "24/7 Support", desc: "Our dedicated support team is always here to help you whenever you need." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient-gold">IPTV Pro</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experience entertainment like never before with our cutting-edge streaming technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass-card rounded-2xl p-6 gradient-border group hover:scale-105 transition-all duration-300 cursor-default ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:glow-orange transition-shadow duration-300">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
