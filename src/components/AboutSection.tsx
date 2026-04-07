import { Globe, Gauge, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Gauge, title: "الأداء", desc: "بث فائق السرعة مدعوم ببنية تحتية CDN محسّنة لتشغيل بدون تقطيع." },
  { icon: Shield, title: "الاستقرار", desc: "سيرفرات بمستوى المؤسسات مع ضمان تشغيل 99.9% وتحويل تلقائي." },
  { icon: Globe, title: "وصول عالمي", desc: "اتصل من أي مكان في العالم عبر شبكتنا العالمية الموزعة." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            مدعوم بأحدث <span className="text-gradient-gold">التقنيات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تقنية IPTV تستخدم بروتوكول الإنترنت لتوصيل المحتوى التلفزيوني عبر اتصالك بالإنترنت،
            مما يوفر جودة ومرونة فائقة مقارنة بالبث التقليدي.
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