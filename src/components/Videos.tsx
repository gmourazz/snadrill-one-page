import { PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
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
        <Reveal className="text-center">
          <h2 className="mb-10 inline-flex items-center gap-3 font-display text-[26px] font-bold text-cream uppercase sm:mb-12 sm:text-[32px] lg:text-[38px]">
            <PlayCircle className="h-6 w-6 flex-none text-amber sm:h-8 sm:w-8" strokeWidth={2} />
            Equipamentos em ação
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
          {videos.map((video, index) => (
            <Reveal key={video.src} delay={index * 0.12} className="w-full max-w-80 text-center">
              <div className="mx-auto max-h-130 max-w-80 overflow-hidden rounded-2xl border border-[#2e2819] bg-black shadow-[0_18px_44px_-28px_rgba(0,0,0,0.6)]">
                <video
                  src={`${video.src}#t=0.1`}
                  controls
                  preload="metadata"
                  playsInline
                  className="block h-auto max-h-130 w-full"
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
