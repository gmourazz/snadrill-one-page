import { PlayCircle } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import posterImg from "../assets/videos/roc-d7-video-poster.jpeg";
import video1 from "../assets/videos/roc-d7-video-1.mp4";
import video2 from "../assets/videos/roc-d7-video-2.mp4";

const videos = [
  { src: video1, label: "ROC D7 em operação" },
  { src: video2, label: "ROC D7 em campo" },
];

export default function Videos() {
  return (
    <section className="bg-ink-strong px-4 py-16 sm:px-6 sm:py-22">
      <div className="mx-auto max-w-310">
        <Reveal>
          <Eyebrow icon={PlayCircle} tone="amber">
            Equipamento em ação
          </Eyebrow>
          <h2 className="mb-10 font-display text-[26px] font-bold text-cream uppercase sm:mb-12 sm:text-[32px] lg:text-[38px]">
            Veja o ROC D7 em campo
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {videos.map((video, index) => (
            <Reveal key={video.src} delay={index * 0.12}>
              <div className="overflow-hidden rounded-2xl border border-[#2e2819] bg-black shadow-[0_18px_44px_-28px_rgba(0,0,0,0.6)]">
                <video
                  src={video.src}
                  poster={posterImg}
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-video h-full w-full"
                >
                  Seu navegador não suporta vídeo em HTML5.
                </video>
              </div>
              <p className="mt-3 text-sm font-medium text-[#cfc9ba]">{video.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
