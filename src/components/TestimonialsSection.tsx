import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "Ahmed K.", text: "Best IPTV service I've ever used. Crystal clear quality and zero buffering!", avatar: "AK" },
  { name: "Sarah M.", text: "Love the variety of channels. My whole family enjoys it every day.", avatar: "SM" },
  { name: "Omar H.", text: "The sports coverage is incredible. Never miss a match anymore!", avatar: "OH" },
  { name: "Fatima A.", text: "24/7 support is amazing. They helped me set up everything in minutes.", avatar: "FA" },
  { name: "Youssef R.", text: "NWE 4K quality is mind-blowing. Feels like cinema at home.", avatar: "YR" },
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
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
        </div>

        <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-8 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                {t.avatar}
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
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
