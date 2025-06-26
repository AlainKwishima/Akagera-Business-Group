import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * A thin wrapper around the native <section> tag that
 * forwards className/props for consistent styling.
 */
interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  )
}
