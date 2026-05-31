import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

const p = (title: string, c1: string, c2: string, icon: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="500" height="750" fill="url(#g)"/><text x="250" y="330" font-size="120" text-anchor="middle" dominant-baseline="middle">${icon}</text><text x="250" y="480" font-size="38" font-family="Arial" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

const movies = [
  { image: p("أفلام أكشن",      "#1a1a2e","#e94560","💥"), title: "أفلام أكشن" },
  { image: p("أبطال خارقون",    "#0f3460","#533483","🦸"), title: "أبطال خارقون" },
  { image: p("خيال علمي",       "#03071e","#00b4d8","🚀"), title: "خيال علمي" },
  { image: p("إثارة وغموض",     "#2d132c","#ee4540","🔍"), title: "إثارة وغموض" },
  { image: p("مغامرات",         "#1b4332","#52b788","🗺️"), title: "مغامرات" },
  { image: p("رعب",             "#0a0a0a","#6b0f1a","👻"), title: "رعب" },
  { image: p("فانتازيا",        "#240046","#7b2ff7","🧙"), title: "فانتازيا" },
  { image: p("حروب ملحمية",     "#212529","#c9a227","⚔️"), title: "حروب ملحمية" },
  { image: p("كوميديا",         "#e76f51","#f4a261","😂"), title: "كوميديا" },
  { image: p("جريمة ودراما",    "#14213d","#fca311","🎭"), title: "جريمة ودراما" },
  { image: p("رومانسية",        "#590d22","#ff4d6d","❤️"), title: "رومانسية" },
  { image: p("تاريخية",         "#582f0e","#c9a227","🏛️"), title: "تاريخية" },
  { image: p("وثائقية",         "#023e8a","#48cae4","🎥"), title: "وثائقية" },
  { image: p("دراما عائلية",    "#2d6a4f","#95d5b2","👨‍👩‍👧"), title: "دراما عائلية" },
  { image: p("إثارة بوليسية",   "#1c1c1c","#c77dff","🕵️"), title: "إثارة بوليسية" },
];

const series = [
  { image: p("دراما بوليسية",    "#1c1c1c","#e63946","👮"), title: "دراما بوليسية" },
  { image: p("خوارق ومغامرات",  "#10002b","#7b2ff7","⚡"), title: "خوارق ومغامرات" },
  { image: p("فانتازيا ملحمية", "#370617","#f48c06","🐉"), title: "فانتازيا ملحمية" },
  { image: p("دراما طبية",      "#003049","#fcbf49","🏥"), title: "دراما طبية" },
  { image: p("إثارة نفسية",     "#0d0d0d","#9d4edd","🧠"), title: "إثارة نفسية" },
  { image: p("أكشن مستقبلي",   "#03071e","#48cae4","🤖"), title: "أكشن مستقبلي" },
  { image: p("تاريخي ملحمي",   "#7f4f24","#e9c46a","🏰"), title: "تاريخي ملحمي" },
  { image: p("جريمة منظمة",    "#212529","#dc2f02","🃏"), title: "جريمة منظمة" },
  { image: p("رعب ومفاجآت",    "#03071e","#6a0572","😱"), title: "رعب ومفاجآت" },
  { image: p("كوميديا رومانسية","#ff6b6b","#feca57","💑"), title: "كوميديا رومانسية" },
  { image: p("مسلسلات تركية",  "#780000","#c1121f","🌙"), title: "مسلسلات تركية" },
  { image: p("دراما كورية",    "#0077b6","#00b4d8","🎎"), title: "دراما كورية" },
  { image: p("أكشن ياباني",    "#d00000","#370617","⛩️"), title: "أكشن ياباني" },
  { image: p("ميني سيريز",     "#22223b","#9a8c98","📺"), title: "ميني سيريز" },
  { image: p("دراما اجتماعية", "#386641","#a7c957","🌍"), title: "دراما اجتماعية" },
];

const sports = [
  { image: p("كرة القدم",         "#005f73","#94d2bd","⚽"), title: "كرة القدم" },
  { image: p("كرة السلة",         "#e85d04","#f48c06","🏀"), title: "كرة السلة" },
  { image: p("فورمولا 1",         "#d00000","#370617","🏎️"), title: "فورمولا 1" },
  { image: p("الملاكمة",          "#1c1c1c","#c9a227","🥊"), title: "الملاكمة" },
  { image: p("ألعاب القوى",       "#0077b6","#48cae4","🏃"), title: "ألعاب القوى" },
  { image: p("سباحة",             "#023e8a","#90e0ef","🏊"), title: "سباحة" },
  { image: p("تنس",               "#2d6a4f","#95d5b2","🎾"), title: "تنس" },
  { image: p("فوتبول أمريكي",    "#7f4f24","#c9a227","🏈"), title: "فوتبول أمريكي" },
  { image: p("تسلق الجبال",       "#606c38","#dda15e","🧗"), title: "تسلق الجبال" },
  { image: p("لياقة بدنية",       "#370617","#e85d04","💪"), title: "لياقة بدنية" },
  { image: p("كرة الطائرة",       "#0096c7","#caf0f8","🏐"), title: "كرة الطائرة" },
  { image: p("هوكي الجليد",       "#023e8a","#ade8f4","🏒"), title: "هوكي الجليد" },
  { image: p("جمباز",             "#9d4edd","#c77dff","🤸"), title: "جمباز" },
  { image: p("رياضات مائية",      "#0077b6","#00b4d8","🚣"), title: "رياضات مائية" },
  { image: p("رياضات شتوية",      "#caf0f8","#023e8a","⛷️"), title: "رياضات شتوية" },
];

const kids = [
  { image: p("عالم الكرتون",      "#ff6b6b","#feca57","🎨"), title: "عالم الكرتون" },
  { image: p("أميرات الثلج",      "#a8dadc","#457b9d","❄️"), title: "أميرات الثلج" },
  { image: p("كلاب الإنقاذ",      "#e63946","#f4a261","🐶"), title: "كلاب الإنقاذ" },
  { image: p("مغامرات استوائية",  "#2d6a4f","#95d5b2","🌴"), title: "مغامرات استوائية" },
  { image: p("عالم الديناصورات", "#606c38","#dda15e","🦕"), title: "عالم الديناصورات" },
  { image: p("سحر وخيال",         "#7400b8","#c77dff","✨"), title: "سحر وخيال" },
  { image: p("أبطال صغار",        "#f72585","#7209b7","🦸‍♂️"), title: "أبطال صغار" },
  { image: p("فضاء وكواكب",       "#03071e","#48cae4","🪐"), title: "فضاء وكواكب" },
  { image: p("حيوانات مضحكة",     "#f4a261","#e76f51","🐾"), title: "حيوانات مضحكة" },
  { image: p("مدرسة السحر",       "#240046","#ff6d00","🪄"), title: "مدرسة السحر" },
  { image: p("موسيقى وغناء",      "#ff006e","#fb5607","🎵"), title: "موسيقى وغناء" },
  { image: p("عالم البحار",       "#0077b6","#caf0f8","🐠"), title: "عالم البحار" },
  { image: p("مزرعة الحيوانات",   "#386641","#a7c957","🐄"), title: "مزرعة الحيوانات" },
  { image: p("رسوم متحركة",       "#ff4d6d","#ff9a3c","🎬"), title: "رسوم متحركة" },
  { image: p("ألعاب وتحديات",     "#7209b7","#3a0ca3","🎮"), title: "ألعاب وتحديات" },
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
