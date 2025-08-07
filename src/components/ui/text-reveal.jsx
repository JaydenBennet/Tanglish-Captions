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
    offset: ["start 0.9", "start 0.25"]
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-10 mx-auto", className)}>
      <div className="mx-auto px-4 pb-10 pt-8">
        <p className={cn("mx-auto leading-relaxed text-black/80 dark:text-white/80", className)}>
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
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
    </div>
  )
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  )
}