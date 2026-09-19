import { motion } from "framer-motion";
import { Award, Mountain, Users } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import cabControlsImage from "../assets/cab-controls.jpeg";

const highlights = [
  { icon: Mountain, text: "Mineração, pedreiras e infraestrutura" },
  { icon: Award, text: "Experiência com Atlas Copco/Epiroc e Sandvik" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream-dark px-4 py-16 sm:px-6 sm:py-22">
      <div className="mx-auto grid max-w-310 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow icon={Users}>Quem somos</Eyebrow>
          <h2 className="mb-4.5 font-display text-2xl font-bold text-ink-strong uppercase sm:text-[32px]">
            SNADRILL Máquinas e Serviços
          </h2>
          <p className="mb-6 text-base leading-loose text-[#4a463f]">
            Atuamos na locação de perfuratrizes e equipamentos de perfuração de rocha e na manutenção
            especializada desses equipamentos, atendendo operações de mineração, pedreiras,
            infraestrutura e desmonte de rocha, com experiência em equipamentos Atlas Copco/Epiroc e
            Sandvik.
          </p>
          <div className="flex flex-col gap-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="inline-flex items-center gap-2.5 text-sm font-medium text-[#3a352b]">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber/15">
                  <Icon className="h-4 w-4 text-amber-dark" strokeWidth={2.25} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-4/3 overflow-hidden rounded-[20px] shadow-[0_24px_60px_-32px_rgba(23,20,15,0.55)]"
        >
          <img
            src={cabControlsImage}
            alt="Cabine de comando de perfuratriz"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
