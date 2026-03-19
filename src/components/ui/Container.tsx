import * as React from "react";
import { cn } from "@/lib/utils";

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-20", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";
