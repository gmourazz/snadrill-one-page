import { motion } from "framer-motion";
import { CheckCircle2, Cog, RefreshCw, Search, Wrench, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import topHammer1 from "../assets/top-hammer-1.jpeg";
import topHammer2 from "../assets/top-hammer-2.jpeg";

const mainServices = [
  "Avaliação técnica e diagnóstico de equipamentos",
  "Assistência técnica especializada",
  "Manutenção preventiva e corretiva",
  "Identificação de desgastes e riscos de falha",
  "Avaliação e planejamento de reformas",
  "Recuperação de componentes e sistemas de perfuração",
  "Revisão de conjuntos hidráulicos e mecânicos",
  "Manutenção de perfuratrizes de topo",
  "Planejamento de intervenções",
  "Recomendações para aumento de confiabilidade e disponibilidade",
];

const howWeWork: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Avaliação técnica e diagnóstico",
    text: "Avaliamos equipamentos em operação, parados ou com falhas recorrentes, analisando sistemas mecânicos, hidráulicos, estruturais, elétricos e de perfuração, a partir de sintomas como aquecimento, vazamentos, vibrações, baixa rotação e desgaste acelerado.",
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva e corretiva",
    text: "A preventiva inclui inspeções, verificação de desgastes, ajustes e lubrificação. Na corretiva, priorizamos recuperação e reparo antes da substituição completa, sempre que tecnicamente viável.",
  },
  {
    icon: RefreshCw,
    title: "Reforma e recuperação",
    text: "Planejamos reformas com base no estado do equipamento, histórico de manutenção e componentes críticos, recuperando sistemas e restabelecendo a confiabilidade operacional.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-cream px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-310">
        <Reveal>
          <div className="mb-2.5 font-display text-xs font-semibold tracking-[0.14em] text-amber-dark uppercase">
            Manutenção especializada
          </div>
          <h2 className="mb-3.5 font-display text-[26px] font-bold text-ink-strong uppercase sm:text-[32px] lg:text-[38px]">
            Manutenção de perfuratrizes e componentes de perfuratrizes
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-loose text-[#4a463f] sm:mb-12">
            Avaliação técnica, assistência especializada, manutenção preventiva e corretiva,
            recuperação de componentes e reforma de equipamentos e sistemas de perfuração, reduzindo
            paradas não programadas e prolongando a vida útil de componentes de alto valor.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mb-4.5 font-display text-lg font-semibold text-ink-strong uppercase">
            Principais serviços
          </h3>
        </Reveal>
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-2">
          {mainServices.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: (index % 5) * 0.06 }}
              className="flex items-start gap-2.5 border-b border-[#e6e0d2] py-2.5 sm:px-4"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-dark" strokeWidth={2} />
              <span className="text-sm text-[#3a352b]">{service}</span>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h3 className="mb-4 font-display text-lg font-semibold text-ink-strong uppercase">
              Equipamentos atendidos
            </h3>
            <div className="mb-4 rounded-2xl border border-[#ece6da] bg-white p-6 shadow-[0_1px_2px_rgba(23,20,15,0.03),0_14px_32px_-24px_rgba(23,20,15,0.24)]">
              <div className="mb-2 flex items-center gap-2 text-[15px] font-bold text-ink-strong">
                <Cog className="h-4 w-4 text-amber-dark" strokeWidth={2.25} />
                Atlas Copco / Epiroc
              </div>
              <div className="text-sm leading-loose text-[#4a463f]">
                ROC D7 · ROC F9 · ROC T35 · ROC T40 · L8 · D65 · outros modelos, conforme avaliação
                técnica
              </div>
            </div>
            <div className="rounded-2xl border border-[#ece6da] bg-white p-6 shadow-[0_1px_2px_rgba(23,20,15,0.03),0_14px_32px_-24px_rgba(23,20,15,0.24)]">
              <div className="mb-2 flex items-center gap-2 text-[15px] font-bold text-ink-strong">
                <Cog className="h-4 w-4 text-amber-dark" strokeWidth={2.25} />
                Perfuratrizes de topo (Top Hammer)
              </div>
              <div className="text-sm leading-loose text-[#4a463f]">1632 · 1838 · 1840 · 2560 · outros modelos</div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            {[topHammer1, topHammer2].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="aspect-square overflow-hidden rounded-2xl shadow-[0_18px_44px_-28px_rgba(23,20,15,0.5)]"
              >
                <img
                  src={img}
                  alt="Componente de perfuratriz Top Hammer recuperado"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal>
          <h3 className="mb-4.5 font-display text-lg font-semibold text-ink-strong uppercase">
            Como atuamos
          </h3>
        </Reveal>
        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {howWeWork.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[#2e2819] bg-linear-to-br from-[#211c14] to-[#15120d] p-7"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber/12">
                <item.icon className="h-5 w-5 text-amber" strokeWidth={2} />
              </span>
              <div className="mb-2.5 font-display text-base font-semibold text-amber">{item.title}</div>
              <p className="text-sm leading-relaxed text-[#cfc9ba]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
