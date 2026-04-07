import { Tv, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Tv className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-gradient-gold">أبو غيث</span>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#hero" className="hover:text-primary transition-colors">الرئيسية</a>
          <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
          <a href="#plans" className="hover:text-primary transition-colors">الباقات</a>
          <a href="#about" className="hover:text-primary transition-colors">عن الخدمة</a>
        </div>

        <a
          href="https://wa.me/966565662037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          دعم واتساب
        </a>
      </div>

      <div className="text-center mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} أبو غيث. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
);

export default Footer;