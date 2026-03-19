import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "primary" | "dark" | "accent";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", background = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          {
            "py-0": spacing === "none",
            "py-8 md:py-12": spacing === "sm",
            "py-16 md:py-24": spacing === "md",
            "py-24 md:py-32": spacing === "lg",
            "py-32 md:py-48": spacing === "xl",
            "bg-background text-foreground": background === "default",
            "bg-secondary/5 text-foreground": background === "muted",
            "bg-primary text-background": background === "primary",
            "bg-secondary text-background": background === "dark",
            "bg-accent text-white": background === "accent",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";
