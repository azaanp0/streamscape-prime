import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

interface ContentRowProps {
  title: string;
  items: { image: string; title: string }[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <div className="relative group/row">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hidden sm:block"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-1 py-2"
        >
          {items.map((item, i) => (
            <ContentCard key={i} {...item} />
          ))}
        </div>
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hidden sm:block"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ContentRow;
