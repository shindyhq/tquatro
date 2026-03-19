import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "small" | "muted";
  as?: React.ElementType;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "max-w-prose text-foreground/80",
          {
            "text-base font-normal leading-relaxed": variant === "body",
            "text-xl md:text-2xl font-medium leading-tight text-foreground": variant === "lead",
            "text-[10px] md:text-xs font-bold leading-none tracking-[0.2em] uppercase": variant === "small",
            "text-sm font-light text-foreground/60": variant === "muted",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";
