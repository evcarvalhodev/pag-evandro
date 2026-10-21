import { useState, useCallback } from "react";
import { Star, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Vinícius DJ",
    handle: "@djviniciusdias_",
    avatar: "https://goupwin.com/wp-content/webp-express/webp-images/uploads/2024/08/imagem_2024-08-29_232900624.png.webp",
    text: "Os caras são top! Fizeram umas artes pra mim de perfil e divulgação! Trabalho excelente!",
    rating: 5,
  },
  {
    name: "Lucas Souza",
    handle: "@energym",
    avatar: "https://goupwin.com/wp-content/webp-express/webp-images/uploads/2024/08/imagem_2024-08-29_231811216.png.webp",
    text: "Nossa, ficou muito top! Gostei de todos os vídeos, vocês são muito bons! Pode ter certeza que vou indicar vocês.",
    rating: 5,
  },
  {
    name: "João Medina",
    handle: "@medina22personal",
    avatar: "https://goupwin.com/wp-content/webp-express/webp-images/uploads/2024/08/imagem_2024-08-29_232112037.png.webp",
    text: "Incrível! Os caras são fodas!! Fizeram um vídeo publicitário e criaram meu catálogo! Recomendo e vou contratar novamente!",
    rating: 5,
  },
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
  {
    id: "3",
    title: "Avaliação Vinícius",
    youtubeId: "_KRZYdtAPWM",
    thumbnail: `https://img.youtube.com/vi/_KRZYdtAPWM/hqdefault.jpg`,
  },
];

export function SocialProof() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleVideoSelect = useCallback((video: Video) => {
    setActiveVideo(video);
    setPlaying(false);
  }, []);

  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

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
              Depoimentos reais de quem já trabalhou comigo.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="zoom" delay={150}>
          <div className="relative mt-14">
            <div className="mx-auto max-w-2xl">
              <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-white/[0.04] md:h-16 md:w-16" />

                <div className="flex items-start gap-4">
                  <img
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    className="h-14 w-14 shrink-0 rounded-full border-2 border-white/10 object-cover md:h-16 md:w-16"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-lg font-bold text-white">
                        {testimonials[testimonialIndex].name}
                      </h4>
                      <span className="text-xs text-dark-muted">
                        {testimonials[testimonialIndex].handle}
                      </span>
                    </div>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-gold" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                  "{testimonials[testimonialIndex].text}"
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTestimonialIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === testimonialIndex
                            ? "w-8 bg-whatsapp"
                            : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </Section>
  );
}
