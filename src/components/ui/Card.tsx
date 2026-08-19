import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border-subtle bg-bg-surface text-text-primary shadow-sm transition-all hover:border-brand-primary/50 hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
