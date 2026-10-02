   "use client";

   import { LazyMotion, MotionConfig } from "framer-motion";

   const loadFeatures = () =>
     import("./motionFeatures").then((mod) => mod.default);

   export default function MotionProvider({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <LazyMotion features={loadFeatures}>
         <MotionConfig reducedMotion="user">{children}</MotionConfig>
       </LazyMotion>
     );
   }