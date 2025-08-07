import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function RainbowButton({ 
  children, 
  className, 
  variant = "default", 
  size = "default",
  ...props 
}) {
  const variants = {
    default: "h-11 px-8 rounded-xl",
    sm: "h-8 px-3 text-xs rounded-xl",
    lg: "h-12 px-10 rounded-xl text-lg",
  }

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 shrink-0 font-semibold transition-all duration-300",
        "bg-white text-black border border-gray-200 hover:border-gray-300",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:via-green-500 before:via-blue-500 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-20 hover:shadow-lg hover:shadow-orange-500/25",
        "active:scale-95",
        variants[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}