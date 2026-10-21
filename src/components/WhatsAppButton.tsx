import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE = "5512991857568";
const DEFAULT_MSG =
  "Oi Evandro, vi seu portfólio e quero conversar sobre um projeto.";

export function buildWhatsAppLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

interface Props {
  children: React.ReactNode;
  message?: string;
  size?: "default" | "lg" | "xl";
  className?: string;
  glow?: boolean;
  variant?: "primary" | "outline";
}

const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.49-8.413z" />
  </svg>
);

export function WhatsAppButton({
  children,
  message,
  size = "default",
  className,
  glow = false,
  variant = "primary",
}: Props) {
  const sizeClasses = {
    default: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base md:text-lg",
    xl: "px-10 py-5 text-lg md:text-xl",
  };

  const iconSize = {
    default: "h-[18px] w-[18px]",
    lg: "h-5 w-5",
    xl: "h-6 w-6",
  }[size];

  if (variant === "outline") {
    return (
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 font-semibold text-dark-foreground backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10",
          sizeClasses[size],
          className,
        )}
      >
        <WhatsAppGlyph className={iconSize} />
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "shine group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold text-whatsapp-foreground shadow-glow-whatsapp transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_hsl(var(--whatsapp)/0.7)] active:translate-y-0",
        "bg-[linear-gradient(120deg,hsl(var(--whatsapp))_0%,hsl(var(--whatsapp-glow))_50%,hsl(var(--whatsapp))_100%)] bg-[length:200%_100%] hover:bg-[position:100%_0]",
        sizeClasses[size],
        glow && "pulse-glow",
        className,
      )}
    >
      <WhatsAppGlyph className={cn(iconSize, "relative z-10")} />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
    </a>
  );
}
