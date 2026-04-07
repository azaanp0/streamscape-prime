import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

const movies = [
  { image: "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", title: "ذا باتمان" },
  { image: "https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", title: "توب غان: مافريك" },
  { image: "https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", title: "أفاتار" },
  { image: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", title: "إنترستيلر" },
  { image: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", title: "جوكر" },
  { image: "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEhniVolVQ4Zy.jpg", title: "إنسبشن" },
  { image: "https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", title: "ديون" },
  { image: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", title: "ذا ماتريكس" },
];

const series = [
  { image: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", title: "بريكنغ باد" },
  { image: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", title: "أشياء غريبة" },
  { image: "https://image.tmdb.org/t/p/w300/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", title: "ذا ويتشر" },
  { image: "https://image.tmdb.org/t/p/w300/z2yahl2uefxDCl0nogcRBstwruJ.jpg", title: "عائلة التنين" },
  { image: "https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", title: "ذا لاست أوف أس" },
  { image: "https://image.tmdb.org/t/p/w300/9PFonBIUDEFzlBPsrk3Y5aSHRER.jpg", title: "ونزداي" },
  { image: "https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", title: "لعبة الحبار" },
  { image: "https://image.tmdb.org/t/p/w300/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", title: "بيكي بلايندرز" },
];

const sports = [
  { image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=450&fit=crop", title: "دوري أبطال أوروبا" },
  { image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=450&fit=crop", title: "الدوري الإنجليزي" },
  { image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=450&fit=crop", title: "الدوري الإسباني" },
  { image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=300&h=450&fit=crop", title: "UFC والفنون القتالية" },
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=450&fit=crop", title: "كرة السلة NBA" },
  { image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=300&h=450&fit=crop", title: "فورمولا 1" },
  { image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=450&fit=crop", title: "بطولات التنس" },
  { image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=300&h=450&fit=crop", title: "كأس العالم" },
];

const kids = [
  { image: "https://image.tmdb.org/t/p/w300/gIO47PN3mOYv2Eqp1VhfjWQQjDb.jpg", title: "سبونج بوب" },
  { image: "https://image.tmdb.org/t/p/w300/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", title: "فروزن" },
  { image: "https://image.tmdb.org/t/p/w300/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg", title: "باو باترول" },
  { image: "https://image.tmdb.org/t/p/w300/4nSFpGqfMj2XPkz4Mz7KllVyiDP.jpg", title: "موانا" },
  { image: "https://image.tmdb.org/t/p/w300/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", title: "حكاية لعبة" },
  { image: "https://image.tmdb.org/t/p/w300/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg", title: "إنكانتو" },
  { image: "https://image.tmdb.org/t/p/w300/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg", title: "مينيونز" },
  { image: "https://image.tmdb.org/t/p/w300/jTswp6KyDYKtvC52GbHagrZbGvD.jpg", title: "لوكا" },
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