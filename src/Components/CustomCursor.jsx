import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 18,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 18,
    mass: 0.4,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a,button,input,textarea,.cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          width: hovering ? 70 : 45,
          height: hovering ? 70 : 45,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-xl pointer-events-none z-[9998]"
      />

      {/* Liquid Blob */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          width: hovering ? 36 : 22,
          height: hovering ? 36 : 22,
          borderRadius: hovering ? "35%" : "50%",
          rotate: hovering ? 180 : 0,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_25px_rgba(34,197,94,.8)] pointer-events-none z-[9999]"
      />

      {/* Core */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 0.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white pointer-events-none z-[10000]"
      />
    </>
  );
};

export default CustomCursor;