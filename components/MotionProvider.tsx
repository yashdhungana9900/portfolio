"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// LazyMotion + the small `m` component keeps Framer Motion's bundle small,
// which matters for the Lighthouse performance score.
// reducedMotion="user" turns animations off for people who ask for that in their OS.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
