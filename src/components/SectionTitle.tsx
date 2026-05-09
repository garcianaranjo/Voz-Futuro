import { motion } from 'motion/react';
import React from 'react';

export function SectionTitle({ children, light = false, italic = false }: { children: React.ReactNode, light?: boolean, italic?: boolean }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl tracking-wide mb-8 font-display drop-shadow-sm ${light ? 'text-white' : 'text-brand-primary'} ${italic ? 'rotate-[-2deg]' : ''}`}
    >
      {children}
    </motion.h2>
  );
}
