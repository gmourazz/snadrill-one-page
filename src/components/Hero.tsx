import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import heroImage from "../assets/hero-quarry.jpeg";
import { WHATSAPP_URL } from "../lib/contact";

const trustPoints = [
  { icon: Truck, text: "Frota própria" },
  { icon: Wrench, text: "Suporte técnico especializado" },
  { icon: ShieldCheck, text: "Equipamentos revisados" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-end sm:min-h-[88vh] sm:max-h-[760px]">
      <motion.img
        src={heroImage}
        alt="Perfuratriz operando em pedreira"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(15,13,9,0.92)] via-[rgba(15,13,9,0.55)] via-55% to-[rgba(15,13,9,0.35)]" />

      <div className="relative mx-auto w-full max-w-310 px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-18 lg:pt-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-3.5 font-display text-xs font-semibold tracking-[0.14em] text-amber uppercase sm:text-sm"
        >
          Locação de perfuratrizes e equipamentos de perfuração
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-5 max-w-3xl font-display text-[32px] leading-[1.08] font-bold text-cream uppercase sm:text-[44px] lg:text-[58px]"
        >
          Máquinas prontas para perfurar a sua próxima frente de rocha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-8 max-w-xl text-base leading-relaxed text-[#e2ddd0] sm:text-[17px]"
        >
          Locamos perfuratrizes hidráulicas e equipamentos de perfuração para mineração, pedreiras,
          infraestrutura e desmonte de rocha, com suporte técnico especializado da SNADRILL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap gap-3.5"
        >
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-bold text-ink-strong shadow-[0_10px_26px_-12px_rgba(240,169,30,0.9)] transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Falar no WhatsApp
          </a>
          <a
            href="#equipamentos"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/35 bg-white/6 px-7 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-white/12"
          >
            Ver equipamentos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-cream/15 pt-6"
        >
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="inline-flex items-center gap-2 text-xs font-medium text-cream/80 sm:text-sm">
              <Icon className="h-4 w-4 flex-none text-amber" strokeWidth={2} />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
