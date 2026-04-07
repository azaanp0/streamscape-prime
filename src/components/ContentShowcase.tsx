import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

import movies1 from "@/assets/movies-1.jpg";
import movies2 from "@/assets/movies-2.jpg";
import movies3 from "@/assets/movies-3.jpg";
import movies4 from "@/assets/movies-4.jpg";
import movies5 from "@/assets/movies-5.jpg";
import movies6 from "@/assets/movies-6.jpg";
import movies7 from "@/assets/movies-7.jpg";
import movies8 from "@/assets/movies-8.jpg";

import series1 from "@/assets/series-1.jpg";
import series2 from "@/assets/series-2.jpg";
import series3 from "@/assets/series-3.jpg";
import series4 from "@/assets/series-4.jpg";

import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import sports3 from "@/assets/sports-3.jpg";
import sports4 from "@/assets/sports-4.jpg";

import kids1 from "@/assets/kids-1.jpg";
import kids2 from "@/assets/kids-2.jpg";
import kids3 from "@/assets/kids-3.jpg";
import kids4 from "@/assets/kids-4.jpg";

const movies = [
  { image: movies1, title: "أفلام أكشن" },
  { image: movies2, title: "أبطال خارقون" },
  { image: movies3, title: "خيال علمي" },
  { image: movies4, title: "إثارة وغموض" },
  { image: movies5, title: "مغامرات" },
  { image: movies6, title: "رعب" },
  { image: movies7, title: "فانتازيا" },
  { image: movies8, title: "حروب ملحمية" },
];

const series = [
  { image: series1, title: "دراما بوليسية" },
  { image: series2, title: "خوارق ومغامرات" },
  { image: series3, title: "فانتازيا ملحمية" },
  { image: series4, title: "دراما طبية" },
];

const sports = [
  { image: sports1, title: "كرة القدم" },
  { image: sports2, title: "كرة السلة" },
  { image: sports3, title: "فورمولا 1" },
  { image: sports4, title: "الملاكمة" },
];

const kids = [
  { image: kids1, title: "عالم الكرتون" },
  { image: kids2, title: "أميرات الثلج" },
  { image: kids3, title: "كلاب الإنقاذ" },
  { image: kids4, title: "مغامرات استوائية" },
];

const ContentShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="content" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div ref={ref} className={`max-w-7xl mx-auto relative z-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            استكشف <span className="text-gradient-gold">المحتوى</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            آلاف الأفلام والمسلسلات والرياضة ومحتوى الأطفال — الكل في مكان واحد.
          </p>
        </div>

        <ContentRow title="🎬 أفلام شائعة" items={movies} />
        <ContentRow title="📺 مسلسلات رائجة" items={series} />
        <ContentRow title="⚽ رياضة مباشرة" items={sports} />
        <ContentRow title="👨‍👩‍👧‍👦 أطفال وعائلة" items={kids} />
      </div>
    </section>
  );
};

export default ContentShowcase;
