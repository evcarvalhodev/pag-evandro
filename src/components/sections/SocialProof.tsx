import { useState, useCallback } from "react";
import { Star, Play, X } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

// Prints de feedbacks de clientes (destaques do Instagram), em /public/feedbacks
const feedbacks = Array.from(
  { length: 12 },
  (_, i) => `/feedbacks/feedback-${String(i + 1).padStart(2, "0")}.webp`,
);
const feedbackRows = [
  feedbacks.filter((_, i) => i % 2 === 0),
  feedbacks.filter((_, i) => i % 2 === 1),
];

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Avaliação Lucas",
    youtubeId: "BI4gLwGcdmc",
    thumbnail: `https://img.youtube.com/vi/BI4gLwGcdmc/hqdefault.jpg`,
  },
  {
    id: "2",
    title: "Avaliação Marcos",
    youtubeId: "1j8103t0Uu8",
    thumbnail: `https://img.youtube.com/vi/1j8103t0Uu8/hqdefault.jpg`,
  },
];

export function SocialProof() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);
  const [openFeedback, setOpenFeedback] = useState<string | null>(null);

  const handleVideoSelect = useCallback((video: Video) => {
    setActiveVideo(video);
    setPlaying(false);
  }, []);

  return (
    <Section id="provas" className="relative overflow-hidden bg-dark-section text-dark-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <RevealOnScroll variant="blur">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-whatsapp/25 bg-whatsapp/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-whatsapp">
              <Star className="h-3 w-3" fill="currentColor" />
              Prova social
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Quem já{" "}
              <span className="gradient-text-animated">confiou</span>{" "}
              aprova.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-dark-muted md:text-lg">
              Prints reais de clientes que já compraram comigo.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="zoom" delay={150}>
          <div className="relative -mx-4 mt-14 space-y-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] md:mx-0">
            {feedbackRows.map((row, r) => (
              <div
                key={r}
                className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]"
                style={{ animationDuration: "70s", animationDirection: r ? "reverse" : "normal" }}
              >
                {[...row, ...row].map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenFeedback(src)}
                    className="h-72 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 transition-all duration-300 hover:scale-[1.03] hover:border-whatsapp/40 md:h-96"
                    aria-label="Ampliar feedback de cliente"
                  >
                    <img src={src} alt="Feedback de cliente" loading="lazy" className="h-full w-auto" />
                  </button>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-dark-muted">Toque em um print para ampliar</p>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" delay={100}>
          <div className="mt-20">
            <h3 className="text-center font-display text-2xl font-bold text-white md:text-3xl">
              Veja os depoimentos em{" "}
              <span className="gradient-text-animated">vídeo</span>
            </h3>
            <p className="mt-2 text-center text-sm text-dark-muted">
              Trabalhos realizados em nome da nossa empresa{" "}
              <span className="font-semibold text-whatsapp-glow">GoUp Creation</span>
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_280px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40">
                <div className="aspect-video w-full">
                  {playing ? (
                    <iframe
                      key={activeVideo.youtubeId}
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&autoplay=1`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <button
                      onClick={() => setPlaying(true)}
                      className="relative h-full w-full group"
                      aria-label={`Assistir ${activeVideo.title}`}
                    >
                      <img
                        src={activeVideo.thumbnail}
                        alt={activeVideo.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-transform group-hover:scale-110">
                          <Play className="h-7 w-7 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-white">{activeVideo.title}</h4>
                </div>
              </div>

              <div className="flex flex-row gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-x-visible md:pb-0">
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`group flex shrink-0 items-center gap-3 rounded-xl border p-2 text-left transition-all duration-300 md:w-full ${
                      activeVideo.id === video.id
                        ? "border-electric/40 bg-electric/10 shadow-[0_0_20px_-5px_hsl(var(--electric)/0.3)]"
                        : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg md:h-14 md:w-20">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play
                          className={`h-5 w-5 ${
                            activeVideo.id === video.id ? "text-electric" : "text-white/80"
                          }`}
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold leading-tight md:text-sm ${
                        activeVideo.id === video.id ? "text-electric" : "text-white/70"
                      }`}
                    >
                      {video.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {openFeedback && (
        <button
          onClick={() => setOpenFeedback(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          aria-label="Fechar"
        >
          <img src={openFeedback} alt="Feedback de cliente" className="max-h-[90vh] max-w-full rounded-2xl" />
          <X className="absolute right-5 top-5 h-7 w-7 text-white/80" />
        </button>
      )}
    </Section>
  );
}
