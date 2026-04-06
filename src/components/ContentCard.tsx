import { Play } from "lucide-react";

interface ContentCardProps {
  image: string;
  title: string;
}

const ContentCard = ({ image, title }: ContentCardProps) => (
  <div className="flex-shrink-0 w-40 sm:w-48 group cursor-pointer">
    <div className="relative rounded-xl overflow-hidden aspect-[2/3] mb-2">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300 flex items-center justify-center">
        <Play className="h-10 w-10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
      </div>
    </div>
    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
      {title}
    </p>
  </div>
);

export default ContentCard;
