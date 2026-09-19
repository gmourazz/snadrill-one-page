import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface EquipmentCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export default function EquipmentCard({ image, tag, title, description, features, delay = 0 }: EquipmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-2xl border border-[#ece6da] bg-white shadow-[0_1px_2px_rgba(23,20,15,0.04),0_18px_40px_-24px_rgba(23,20,15,0.28)] transition-shadow hover:shadow-[0_1px_2px_rgba(23,20,15,0.06),0_28px_54px_-24px_rgba(23,20,15,0.36)]"
    >
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6 sm:p-7">
        <div className="mb-3.5 inline-block rounded-full bg-[#f3ead8] px-3 py-1.5 text-xs font-bold tracking-wide text-amber-dark uppercase">
          {tag}
        </div>
        <h3 className="mb-2.5 font-display text-xl font-bold text-ink-strong sm:text-2xl">{title}</h3>
        <p className="mb-4.5 text-sm leading-relaxed text-[#4a463f] sm:text-[15px]">{description}</p>
        <div className="border-t border-[#ece6d8] pt-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 py-1.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber" strokeWidth={2} />
              <span className="text-sm text-[#3a352b]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
