import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

const movies = [
  { image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&fit=crop", title: "أفلام أكشن" },
  { image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&fit=crop", title: "أبطال خارقون" },
  { image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&fit=crop", title: "خيال علمي" },
  { image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&fit=crop", title: "إثارة وغموض" },
  { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&fit=crop", title: "مغامرات" },
  { image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&fit=crop", title: "رعب" },
  { image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&fit=crop", title: "فانتازيا" },
  { image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&fit=crop", title: "حروب ملحمية" },
  { image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500&fit=crop", title: "كوميديا" },
  { image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&fit=crop", title: "جريمة ودراما" },
  { image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&fit=crop", title: "رومانسية" },
  { image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&fit=crop", title: "تاريخية" },
  { image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=500&fit=crop", title: "وثائقية" },
  { image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&fit=crop", title: "دراما عائلية" },
  { image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&fit=crop", title: "إثارة بوليسية" },
];

const series = [
  { image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&fit=crop", title: "دراما بوليسية" },
  { image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&fit=crop", title: "خوارق ومغامرات" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&fit=crop", title: "فانتازيا ملحمية" },
  { image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?w=500&fit=crop", title: "دراما طبية" },
  { image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500&fit=crop", title: "إثارة نفسية" },
  { image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&fit=crop", title: "أكشن مستقبلي" },
  { image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=500&fit=crop", title: "تاريخي ملحمي" },
  { image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&fit=crop", title: "جريمة منظمة" },
  { image: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=500&fit=crop", title: "رعب ومفاجآت" },
  { image: "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?w=500&fit=crop", title: "كوميديا رومانسية" },
  { image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&fit=crop", title: "مسلسلات تركية" },
  { image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&fit=crop", title: "دراما كورية" },
  { image: "https://images.unsplash.com/photo-1565117220557-d5a5d99a0439?w=500&fit=crop", title: "أكشن ياباني" },
  { image: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=500&fit=crop", title: "ميني سيريز" },
  { image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&fit=crop", title: "دراما اجتماعية" },
];

const sports = [
  { image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&fit=crop", title: "كرة القدم" },
  { image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&fit=crop", title: "كرة السلة" },
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&fit=crop", title: "فورمولا 1" },
  { image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=500&fit=crop", title: "الملاكمة" },
  { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&fit=crop", title: "ألعاب القوى" },
  { image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&fit=crop", title: "سباحة" },
  { image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=500&fit=crop", title: "تنس" },
  { image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&fit=crop", title: "كرة القدم الأمريكية" },
  { image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&fit=crop", title: "تسلق الجبال" },
  { image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&fit=crop", title: "لياقة بدنية" },
  { image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=500&fit=crop", title: "كرة الطائرة" },
  { image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&fit=crop", title: "هوكي الجليد" },
  { image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&fit=crop", title: "جمباز" },
  { image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=500&fit=crop", title: "رياضات مائية" },
  { image: "https://images.unsplash.com/photo-1565992441121-4367a2sdf1ef?w=500&fit=crop", title: "رياضات شتوية" },
];

const kids = [
  { image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&fit=crop", title: "عالم الكرتون" },
  { image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=500&fit=crop", title: "أميرات الثلج" },
  { image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&fit=crop", title: "كلاب الإنقاذ" },
  { image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=500&fit=crop", title: "مغامرات استوائية" },
  { image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=500&fit=crop", title: "عالم الديناصورات" },
  { image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&fit=crop", title: "سحر وخيال" },
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&fit=crop", title: "أبطال صغار" },
  { image: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=500&fit=crop", title: "فضاء وكواكب" },
  { image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&fit=crop", title: "حيوانات مضحكة" },
  { image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&fit=crop", title: "مدرسة السحر" },
  { image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=500&fit=crop", title: "موسيقى وغناء" },
  { image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&fit=crop", title: "عالم البحار" },
  { image: "https://images.unsplash.com/photo-1477949331575-2763034078ab?w=500&fit=crop", title: "مزرعة الحيوانات" },
  { image: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=500&fit=crop", title: "رسوم متحركة" },
  { image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=500&fit=crop", title: "ألعاب وتحديات" },
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
