import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-background hover:bg-accent hover:text-white": variant === "primary",
            "bg-secondary text-background hover:bg-secondary/90": variant === "secondary",
            "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-background": variant === "outline",
            "bg-transparent text-primary hover:bg-primary/10": variant === "ghost",
            "h-12 px-6 py-2 text-xs": size === "sm",
            "h-14 px-8 py-3 text-sm": size === "md",
            "h-16 px-12 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
