import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "أحمد خ.", text: "أفضل خدمة IPTV استخدمتها على الإطلاق. جودة عالية وبدون أي تقطيع!" },
  { name: "سارة م.", text: "أحب تنوع القنوات. كل العائلة تستمتع بها يومياً." },
  { name: "عمر ح.", text: "التغطية الرياضية رائعة. لم أعد أفوّت أي مباراة!" },
  { name: "فاطمة ع.", text: "الدعم الفني متاح 24 ساعة وممتاز. ساعدوني في إعداد كل شيء خلال دقائق." },
  { name: "يوسف ر.", text: "جودة NWE 4K مذهلة. تحس إنك في السينما وأنت في بيتك." },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4">
      <div ref={ref} className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>
          </h2>
        </div>

        <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden min-h-[160px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-8 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-muted-foreground mb-4 text-sm sm:text-base italic">"{t.text}"</p>
              <p className="text-foreground font-semibold">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
