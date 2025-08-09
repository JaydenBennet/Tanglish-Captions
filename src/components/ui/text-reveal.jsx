import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export function TextReveal({ 
  text,
  className,
}) {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.2"]
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-10", className)}>
      <p className={cn("leading-tight", className)}>
        {words.map((word, i) => {
          const start = i / words.length
          const end = Math.min(start + 0.2, 1)
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.3, 1], { clamp: true })
  return (
    <span className="relative mx-1 inline-block">
      <span className="absolute inset-0 text-gray-300 pointer-events-none -z-10">{children}</span>
      <motion.span style={{ opacity }} className="relative z-10 text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  )
}