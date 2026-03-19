import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  dualColor?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, dualColor = false, children, ...props }, ref) => {
    const Tag = `h${level}` as React.ElementType;
    
    return (
      <Tag
        ref={ref}
        className={cn(
          "tracking-tighter uppercase leading-[0.9]",
          {
            "font-black text-6xl md:text-[8rem] lg:text-[10rem]": level === 1,
            "font-black text-5xl md:text-6xl lg:text-8xl": level === 2,
            "font-extrabold text-4xl md:text-5xl": level === 3,
            "font-bold text-3xl md:text-4xl": level === 4,
            "font-bold text-2xl md:text-3xl": level === 5,
            "font-bold text-xl md:text-2xl": level === 6,
            "text-dual-heading": dualColor,
            "text-primary dark:text-foreground": !dualColor,
          },
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";
