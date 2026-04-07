import { MessageCircle, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  { name: "Falcon", desc: "سرعة فائقة مع قنوات HD مميزة وتغطية عالمية شاملة." },
  { name: "Hulk The German", desc: "باقة محتوى ألماني ودولي قوية لمشاهدة غير محدودة." },
  { name: "Vulture", desc: "حلّق عبر عالم واسع من الترفيه مع رياضة وسينما حصرية." },
  { name: "Alfa", desc: "بث نخبوي بجودة لا مثيل لها وتنوع هائل في القنوات." },
  { name: "Shark", desc: "غُص في عالم من الأفلام والمسلسلات والأحداث المباشرة." },
  { name: "Gulfar", desc: "ترفيه عربي ودولي مميز في متناول يدك." },
  { name: "Universe", desc: "باقة شاملة تضم كل القنوات التي يمكنك تخيلها." },
  { name: "NWE 4K", desc: "بث الجيل القادم بدقة 4K فائقة لتجربة بصرية استثنائية." },
];

const PlansSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="plans" className="py-20 px-4 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            باقات <span className="text-gradient-gold">الاشتراك</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            اختر علامتك المفضلة وابدأ البث اليوم.
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
                اشترك عبر واتساب
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;