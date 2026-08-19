import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "icon"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-brand-primary to-brand-secondary text-text-primary shadow hover:-translate-y-0.5 hover:shadow-lg": variant === "primary",
            "bg-bg-surface-hover text-text-primary hover:bg-bg-surface": variant === "secondary",
            "border border-border-strong bg-transparent text-text-primary hover:bg-bg-surface-hover": variant === "outline",
            "bg-transparent hover:bg-bg-surface-hover rounded-md": variant === "icon",
            "h-10 px-4 py-2": size === "default" && variant !== "icon",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
            "h-11 w-11": size === "icon" || variant === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
