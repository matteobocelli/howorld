/**
 * FadeUp — scroll-triggered entrance animation wrapper.
 * Wraps children in a div that fades up when it enters the viewport.
 */
import { useInView } from "@/hooks/useInView";
import { ElementType, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: ElementType;
}

const DELAY_CLASS = ["", "delay-1", "delay-2", "delay-3", "delay-4", "delay-5"];

export default function FadeUp({ children, delay = 0, className = "", as: Tag = "div" }: FadeUpProps) {
  const { ref, inView } = useInView();

  return (
    // @ts-ignore — dynamic tag
    <Tag
      ref={ref}
      className={`animate-fade-up ${inView ? "in-view" : ""} ${DELAY_CLASS[delay]} ${className}`}
    >
      {children}
    </Tag>
  );
}
