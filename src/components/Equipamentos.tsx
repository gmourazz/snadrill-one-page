import { Truck } from "lucide-react";
import EquipmentCard from "./EquipmentCard";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import jumboImage from "../assets/jumbo-dd210.jpeg";
import rocD7Image from "../assets/roc-d7-hero.jpeg";

const equipments = [
  {
    image: rocD7Image,
    tag: "Perfuratriz de superfície",
    title: "Atlas Copco ROC D7",
    description:
      "Perfuratriz hidráulica sobre esteiras, sistema Top Hammer, indicada para produção de furos em mineração, pedreiras e infraestrutura como rodovias e ferrovias.",
    features: [
      "Deslocamento sobre esteiras",
      "Lança hidráulica articulada",
      "Cabine com comandos hidráulicos e eletrônicos",
    ],
  },
  {
    image: jumboImage,
    tag: "Jumbo de perfuração",
    title: "Jumbo DD210",
    description:
      "Equipamento para perfuração de galerias, com lança de alumínio e lança reserva completa, pronto para locação.",
    features: [
      "Lança de alumínio com perfuração de até 3,7 m",
      "Perfuração de galeria de 4,5 × 4,0 m (até 4,5 × 4,5 m)",
      "Furo alargado de 4 polegadas",
      "Diâmetro de perfuração de 2.1/2 polegadas",
      "Lança reserva em ferro, montada, com perfuratriz reserva HL510",
      "Lança para perfuração longa, giro de 360°",
      "Lança curta com comprimento de até 15 m",
    ],
  },
];

export default function Equipamentos() {
  return (
    <section id="equipamentos" className="bg-cream px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-310">
        <Reveal>
          <Eyebrow icon={Truck}>Frota própria</Eyebrow>
          <h2 className="mb-3.5 font-display text-[26px] font-bold text-ink-strong uppercase sm:text-[32px] lg:text-[38px]">
            Equipamentos disponíveis para locação
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-[#4a463f] sm:mb-12">
            Perfuratrizes robustas e revisadas, prontas para operar em desmonte de rocha, abertura de
            galerias e produção.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {equipments.map((item, index) => (
            <EquipmentCard key={item.title} {...item} delay={index * 0.12} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-7 text-sm text-[#7a7468]">
            Consulte disponibilidade, condições de locação e outros modelos com a nossa equipe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
