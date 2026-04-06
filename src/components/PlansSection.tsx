import { MessageCircle, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  { name: "Falcon", desc: "Blazing speed with premium HD channels and global coverage." },
  { name: "Hulk The German", desc: "Powerful German & international content bundle for unlimited viewing." },
  { name: "Vulture", desc: "Soar through vast entertainment with exclusive sports and cinema." },
  { name: "Alfa", desc: "Elite streaming with unmatched quality and channel diversity." },
  { name: "Shark", desc: "Dive deep into a world of movies, series, and live events." },
  { name: "Gulfar", desc: "Premium Arabic and international entertainment at your fingertips." },
  { name: "Universe", desc: "All-in-one cosmic package with every channel you can imagine." },
  { name: "NWE 4K", desc: "Next-gen 4K Ultra HD streaming for the ultimate visual experience." },
];

const PlansSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="plans" className="py-20 px-4 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Subscription <span className="text-gradient-gold">Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your preferred IPTV brand and start streaming today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`glass-card rounded-2xl p-6 gradient-border group hover:scale-105 transition-all duration-300 flex flex-col ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Crown className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
              <a
                href="https://wa.me/966565662037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-transform duration-300 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Subscribe via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
