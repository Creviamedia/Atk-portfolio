'use client';

import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
} & (
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'>)
  | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>)
);

export default function MagneticButton(props: MagneticButtonProps) {
  const { children, className = '', href, strength = 0.3, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          className={className}
          target={href.startsWith('/') ? undefined : '_blank'}
          rel={href.startsWith('/') ? undefined : 'noopener noreferrer'}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={className}
          {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}
