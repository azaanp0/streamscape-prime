import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContentRow from "./ContentRow";

const movies = [
  { image: "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", title: "The Batman" },
  { image: "https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", title: "Top Gun: Maverick" },
  { image: "https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", title: "Avatar" },
  { image: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", title: "Interstellar" },
  { image: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", title: "Joker" },
  { image: "https://picsum.photos/seed/mov6/300/450", title: "Inception" },
  { image: "https://picsum.photos/seed/mov7/300/450", title: "Dune" },
  { image: "https://picsum.photos/seed/mov8/300/450", title: "The Matrix" },
];

const series = [
  { image: "https://picsum.photos/seed/ser1/300/450", title: "Breaking Bad" },
  { image: "https://picsum.photos/seed/ser2/300/450", title: "Stranger Things" },
  { image: "https://picsum.photos/seed/ser3/300/450", title: "The Witcher" },
  { image: "https://picsum.photos/seed/ser4/300/450", title: "House of the Dragon" },
  { image: "https://picsum.photos/seed/ser5/300/450", title: "The Last of Us" },
  { image: "https://picsum.photos/seed/ser6/300/450", title: "Wednesday" },
  { image: "https://picsum.photos/seed/ser7/300/450", title: "Squid Game" },
  { image: "https://picsum.photos/seed/ser8/300/450", title: "Peaky Blinders" },
];

const sports = [
  { image: "https://picsum.photos/seed/sp1/300/450", title: "Champions League" },
  { image: "https://picsum.photos/seed/sp2/300/450", title: "Premier League" },
  { image: "https://picsum.photos/seed/sp3/300/450", title: "La Liga" },
  { image: "https://picsum.photos/seed/sp4/300/450", title: "UFC & MMA" },
  { image: "https://picsum.photos/seed/sp5/300/450", title: "NBA Basketball" },
  { image: "https://picsum.photos/seed/sp6/300/450", title: "Formula 1" },
  { image: "https://picsum.photos/seed/sp7/300/450", title: "Tennis Grand Slams" },
  { image: "https://picsum.photos/seed/sp8/300/450", title: "World Cup" },
];

const kids = [
  { image: "https://picsum.photos/seed/kid1/300/450", title: "SpongeBob" },
  { image: "https://picsum.photos/seed/kid2/300/450", title: "Frozen" },
  { image: "https://picsum.photos/seed/kid3/300/450", title: "Paw Patrol" },
  { image: "https://picsum.photos/seed/kid4/300/450", title: "Moana" },
  { image: "https://picsum.photos/seed/kid5/300/450", title: "Toy Story" },
  { image: "https://picsum.photos/seed/kid6/300/450", title: "Encanto" },
  { image: "https://picsum.photos/seed/kid7/300/450", title: "Minions" },
  { image: "https://picsum.photos/seed/kid8/300/450", title: "Luca" },
];

const ContentShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="content" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div ref={ref} className={`max-w-7xl mx-auto relative z-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Explore <span className="text-gradient-gold">Content</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Thousands of movies, series, sports, and kids content — all in one place.
          </p>
        </div>

        <ContentRow title="🎬 Popular Movies" items={movies} />
        <ContentRow title="📺 Trending Series" items={series} />
        <ContentRow title="⚽ Live Sports" items={sports} />
        <ContentRow title="👨‍👩‍👧‍👦 Kids & Family" items={kids} />
      </div>
    </section>
  );
};

export default ContentShowcase;
