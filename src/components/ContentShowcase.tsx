import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

// === استيراد صور الأفلام (15 صورة) ===
import movies1 from "@/assets/movies-1.jpg";
import movies2 from "@/assets/movies-2.jpg";
import movies3 from "@/assets/movies-3.jpg";
import movies4 from "@/assets/movies-4.jpg";
import movies5 from "@/assets/movies-5.jpg";
import movies6 from "@/assets/movies-6.jpg";
import movies7 from "@/assets/movies-7.jpg";
import movies8 from "@/assets/movies-8.jpg";
import movies9 from "@/assets/movies-9.jpg";
import movies10 from "@/assets/movies-10.jpg";
import movies11 from "@/assets/movies-11.jpg";
import movies12 from "@/assets/movies-12.jpg";
import movies13 from "@/assets/movies-13.jpg";
import movies14 from "@/assets/movies-14.jpg";
import movies15 from "@/assets/movies-15.jpg";

// === استيراد صور المسلسلات (15 صورة) ===
import series1 from "@/assets/series-1.jpg";
import series2 from "@/assets/series-2.jpg";
import series3 from "@/assets/series-3.jpg";
import series4 from "@/assets/series-4.jpg";
import series5 from "@/assets/series-5.jpg";
import series6 from "@/assets/series-6.jpg";
import series7 from "@/assets/series-7.jpg";
import series8 from "@/assets/series-8.jpg";
import series9 from "@/assets/series-9.jpg";
import series10 from "@/assets/series-10.jpg";
import series11 from "@/assets/series-11.jpg";
import series12 from "@/assets/series-12.jpg";
import series13 from "@/assets/series-13.jpg";
import series14 from "@/assets/series-14.jpg";
import series15 from "@/assets/series-15.jpg";

// === استيراد صور الرياضة (15 صورة) ===
import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import sports3 from "@/assets/sports-3.jpg";
import sports4 from "@/assets/sports-4.jpg";
import sports5 from "@/assets/sports-5.jpg";
import sports6 from "@/assets/sports-6.jpg";
import sports7 from "@/assets/sports-7.jpg";
import sports8 from "@/assets/sports-8.jpg";
import sports9 from "@/assets/sports-9.jpg";
import sports10 from "@/assets/sports-10.jpg";
import sports11 from "@/assets/sports-11.jpg";
import sports12 from "@/assets/sports-12.jpg";
import sports13 from "@/assets/sports-13.jpg";
import sports14 from "@/assets/sports-14.jpg";
import sports15 from "@/assets/sports-15.jpg";

// === استيراد صور الأطفال (15 صورة) ===
import kids1 from "@/assets/kids-1.jpg";
import kids2 from "@/assets/kids-2.jpg";
import kids3 from "@/assets/kids-3.jpg";
import kids4 from "@/assets/kids-4.jpg";
import kids5 from "@/assets/kids-5.jpg";
import kids6 from "@/assets/kids-6.jpg";
import kids7 from "@/assets/kids-7.jpg";
import kids8 from "@/assets/kids-8.jpg";
import kids9 from "@/assets/kids-9.jpg";
import kids10 from "@/assets/kids-10.jpg";
import kids11 from "@/assets/kids-11.jpg";
import kids12 from "@/assets/kids-12.jpg";
import kids13 from "@/assets/kids-13.jpg";
import kids14 from "@/assets/kids-14.jpg";
import kids15 from "@/assets/kids-15.jpg";

// === مصفوفة الأفلام (15 عنصراً فريداً) ===
const movies = [
  { image: movies1, title: "أفلام أكشن" },
  { image: movies2, title: "أبطال خارقون" },
  { image: movies3, title: "خيال علمي" },
  { image: movies4, title: "إثارة وغموض" },
  { image: movies5, title: "مغامرات" },
  { image: movies6, title: "رعب" },
  { image: movies7, title: "فانتازيا" },
  { image: movies8, title: "حروب ملحمية" },
  { image: movies9, title: "كوميديا" },
  { image: movies10, title: "دراما واقعية" },
  { image: movies11, title: "جريمة وغموض" },
  { image: movies12, title: "أفلام وثائقية" },
  { image: movies13, title: "رومانسية" },
  { image: movies14, title: "رسوم متحركة للكبار" },
  { image: movies15, title: "سير ذاتية ومسيرة" },
];

// === مصفوفة المسلسلات (15 عنصراً فريداً) ===
const series = [
  { image: series1, title: "دراما بوليسية" },
  { image: series2, title: "خوارق ومغامرات" },
  { image: series3, title: "فانتازيا ملحمية" },
  { image: series4, title: "دراما طبية" },
  { image: series5, title: "تحقيق وجرائم" },
  { image: series6, title: "مسلسلات تاريخية" },
  { image: series7, title: "إثارة نفسية" },
  { image: series8, title: "كوميديا المكاتب" },
  { image: series9, title: "عالم الجريمة المُنظمة" },
  { image: series10, title: "خيال علمي مستقبلي" },
  { image: series11, title: "غموض وبلدات صغيرة" },
  { image: series12, title: "مسلسلات قصيرة" },
  { image: series13, title: "صراع العروش والملوك" },
  { image: series14, title: "دراما عائلية" },
  { image: series15, title: "قصص حقيقية" },
];

// === مصفوفة الرياضة (15 عنصراً فريداً) ===
const sports = [
  { image: sports1, title: "كرة القدم" },
  { image: sports2, title: "كرة السلة" },
  { image: sports3, title: "فورمولا 1" },
  { image: sports4, title: "الملاكمة" },
  { image: sports5, title: "التنس العالمي" },
  { image: sports6, title: "الفنون القتالية المفتوحة" },
  { image: sports7, title: "سباقات الهجن والخيول" },
  { image: sports8, title: "كرة اليد" },
  { image: sports9, title: "الألعاب الأولمبية" },
  { image: sports10, title: "رياضات إلكترونية" },
  { image: sports11, title: "المصارعة الحرة" },
  { image: sports12, title: "سباقات الدراجات" },
  { image: sports13, title: "الرياضات الشتوية" },
  { image: sports14, title: "الكريكت" },
  { image: sports15, title: "وثائقيات رياضية" },
];

// === مصفوفة الأطفال (15 عنصراً فريداً) ===
const kids = [
  { image: kids1, title: "عالم الكرتون" },
  { image: kids2, title: "أميرات الثلج" },
  { image: kids3, title: "كلاب الإنقاذ" },
  { image: kids4, title: "مغامرات استوائية" },
  { image: kids5, title: "أبطال المقنعون" },
  { image: kids6, title: "عالم الديناصورات" },
  { image: kids7, title: "قصص وحكايات عالمية" },
  { image: kids8, title: "أغاني وأناشيد للأطفال" },
  { image: kids9, title: "تعليم ومرح" },
  { image: kids10, title: "رحلات الفضاء للصغار" },
  { image: kids11, title: "الحيوانات السعيدة" },
  { image: kids12, title: "ألعاب وابتكارات" },
  { image: kids13, title: "جزيرة الكنز الخفية" },
  { image: kids14, title: "مغامرات تحت الماء" },
  { image: kids15, title: "مدرسة السحر للصغار" },
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
