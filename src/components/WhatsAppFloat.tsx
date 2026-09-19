import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "../lib/contact";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com a SNADRILL"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_28px_-10px_rgba(37,211,102,0.8)] sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
          <svg
            viewBox="0 0 32 32"
            className="relative h-7 w-7 fill-white sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path d="M16.001 3C9.37 3 4 8.37 4 15.001c0 2.386.688 4.612 1.87 6.497L4 29l7.671-1.845A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.63 28 15.001 28 8.37 22.63 3 16.001 3Zm6.995 16.995c-.303.851-1.503 1.556-2.463 1.759-.652.14-1.503.25-4.366-.938-3.662-1.517-6.02-5.236-6.204-5.48-.176-.244-1.485-1.978-1.485-3.775 0-1.797.936-2.68 1.267-3.047.331-.367.723-.459.965-.459.24 0 .482.002.692.013.222.011.52-.084.813.62.303.719 1.028 2.487 1.117 2.668.09.181.152.394.031.638-.122.244-.183.394-.363.607-.181.213-.379.474-.542.638-.181.181-.371.377-.16.741.212.365.942 1.552 2.023 2.514 1.39 1.24 2.563 1.624 2.927 1.807.365.181.578.152.79-.093.212-.244.905-1.055 1.148-1.418.244-.363.487-.303.813-.181.331.121 2.096.988 2.457 1.168.363.181.605.271.694.421.09.152.09.876-.213 1.727Z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
