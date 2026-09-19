import { motion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  PiggyBank,
  Recycle,
  RotateCcw,
  Search,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const benefits: { icon: LucideIcon; text: string }[] = [
  { icon: TrendingDown, text: "Redução de paradas não programadas" },
  { icon: ShieldCheck, text: "Maior disponibilidade e confiabilidade" },
  { icon: Clock, text: "Prolongamento da vida útil dos componentes" },
  { icon: PiggyBank, text: "Menor necessidade de substituições desnecessárias" },
  { icon: CalendarCheck, text: "Melhor planejamento de manutenções e reformas" },
  { icon: Search, text: "Identificação antecipada de riscos" },
  { icon: Recycle, text: "Recuperação de componentes de alto valor" },
  { icon: RotateCcw, text: "Redução de retrabalhos" },
  { icon: Wallet, text: "Maior controle de custos e prazos" },
  { icon: TrendingUp, text: "Melhoria do desempenho e da produtividade" },
];

export default function Beneficios() {
  return (
    <section className="bg-ink-strong px-4 py-16 sm:px-6 sm:py-22">
      <div className="mx-auto max-w-310">
        <Reveal>
          <div className="mb-2.5 font-display text-xs font-semibold tracking-[0.14em] text-amber uppercase">
            Resultado para a operação
          </div>
          <h2 className="mb-9 font-display text-[26px] font-bold text-cream uppercase sm:mb-10 sm:text-[32px] lg:text-[36px]">
            Benefícios para o cliente
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: (index % 5) * 0.07 }}
              className="flex items-center gap-3.5 border-b border-[#2c2619] py-3 sm:px-4"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber/12">
                <Icon className="h-4 w-4 text-amber" strokeWidth={2.25} />
              </span>
              <span className="text-sm text-[#e2ddd0]">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
