import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

const movies = [
  { image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", title: "أفلام أكشن" },
  { image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", title: "أبطال خارقون" },
  { image: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg", title: "خيال علمي" },
  { image: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", title: "إثارة وغموض" },
  { image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", title: "مغامرات" },
  { image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", title: "رعب" },
  { image: "https://image.tmdb.org/t/p/w500/rbM47GMzWFfFAzWFQgOtBxhdX3A.jpg", title: "فانتازيا" },
  { image: "https://image.tmdb.org/t/p/w500/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg", title: "حروب ملحمية" },
  { image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", title: "كوميديا" },
  { image: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg", title: "جريمة ودراما" },
];

const series = [
  { image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", title: "دراما بوليسية" },
  { image: "https://image.tmdb.org/t/p/w500/2LD2at4bbnkn8zeR5FvNTHaVTFb.jpg", title: "خوارق ومغامرات" },
  { image: "https://image.tmdb.org/t/p/w500/xgbeBCAN5G0G5mglNMbosAMNJaQ.jpg", title: "فانتازيا ملحمية" },
  { image: "https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg", title: "دراما طبية" },
  { image: "https://image.tmdb.org/t/p/w500/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg", title: "إثارة نفسية" },
  { image: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg", title: "أكشن مستقبلي" },
  { image: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", title: "تاريخي ملحمي" },
  { image: "https://image.tmdb.org/t/p/w500/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg", title: "جريمة منظمة" },
  { image: "https://image.tmdb.org/t/p/w500/a0LQDKqFpNPJkAOAfFOCd7zI4GX.jpg", title: "رعب ومفاجآت" },
  { image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", title: "كوميديا رومانسية" },
];

const sports = [
  { image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500", title: "كرة القدم" },
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500", title: "كرة السلة" },
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", title: "فورمولا 1" },
  { image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=500", title: "الملاكمة" },
  { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500", title: "ألعاب القوى" },
  { image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500", title: "سباحة" },
  { image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=500", title: "تنس" },
  { image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500", title: "كرة القدم الأمريكية" },
  { image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500", title: "تسلق الجبال" },
  { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500", title: "لياقة بدنية" },
];

const kids = [
  { image: "https://image.tmdb.org/t/p/w500/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg", title: "عالم الكرتون" },
  { image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", title: "أميرات الثلج" },
  { image: "https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8T4QXjQRgxm.jpg", title: "كلاب الإنقاذ" },
  { image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", title: "مغامرات استوائية" },
  { image: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9F3FetygIykEB9dEU.jpg", title: "عالم الديناصورات" },
  { image: "https://image.tmdb.org/t/p/w500/iG3NMvJBFYBo1FLXCLQPRC69fDo.jpg", title: "سحر وخيال" },
  { image: "https://image.tmdb.org/t/p/w500/zA1SxWKBBNDq1Mx22TmUDCCASaD.jpg", title: "أبطال صغار" },
  { image: "https://image.tmdb.org/t/p/w500/xMoHoujhBVqMSfcBX6lCJ9bKkfV.jpg", title: "فضاء وكواكب" },
  { image: "https://image.tmdb.org/t/p/w500/qdIMHd4sEfJSckfVJfKQvisL02a.jpg", title: "حيوانات مضحكة" },
  { image: "https://image.tmdb.org/t/p/w500/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg", title: "مدرسة السحر" },
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
