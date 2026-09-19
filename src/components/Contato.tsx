import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import {
  ADDRESS,
  CONTACT_EMAIL,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_NUMBER,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/contact";

export default function Contato() {
  return (
    <section id="contato" className="border-t border-[#2c2619] bg-night px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[840px] text-center">
        <Reveal>
          <div className="mb-3.5 font-display text-xs font-semibold tracking-[0.14em] text-amber uppercase">
            Fale com a SNADRILL
          </div>
          <h2 className="mb-4.5 font-display text-2xl font-bold text-cream uppercase sm:text-[32px] lg:text-[40px]">
            Precisa alugar, avaliar ou reformar um equipamento?
          </h2>
          <p className="mb-9 text-base leading-loose text-[#cfc9ba] sm:mb-10">
            Fale com a nossa equipe e solicite uma avaliação técnica para identificar as melhores
            alternativas para o seu equipamento e sua operação.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2.5 rounded-full bg-amber px-8 py-4 text-sm font-bold text-ink-strong shadow-[0_10px_26px_-12px_rgba(240,169,30,0.9)] transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY_NUMBER}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#4a4638] bg-white/4 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-white/8"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Ligar {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-14 grid max-w-310 grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-[#2c2619] bg-white/3 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3.5 text-sm text-[#cfc9ba] transition-colors hover:text-amber sm:text-base"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber/12">
                <Mail className="h-4.5 w-4.5 text-amber" strokeWidth={2} />
              </span>
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY_NUMBER}`}
              className="flex items-center gap-3.5 text-sm text-[#cfc9ba] transition-colors hover:text-amber sm:text-base"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber/12">
                <Phone className="h-4.5 w-4.5 text-amber" strokeWidth={2} />
              </span>
              {PHONE_SECONDARY_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 text-sm text-[#cfc9ba] transition-colors hover:text-amber sm:text-base"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber/12">
                <MapPin className="h-4.5 w-4.5 text-amber" strokeWidth={2} />
              </span>
              <span>
                {ADDRESS}
                <span className="mt-1 block text-xs font-semibold tracking-wide text-amber uppercase">
                  Ver no Google Maps
                </span>
              </span>
            </a>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir localização da SNADRILL no Google Maps"
            className="block h-64 w-full lg:h-full lg:min-h-70"
          >
            <iframe
              title="Localização da SNADRILL Máquinas e Serviços no Google Maps"
              src={MAPS_EMBED_URL}
              className="h-full w-full grayscale-35 contrast-115"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
