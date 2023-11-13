import { ReactNode } from "react";
import { cn } from "@web/lib/utils";
export function TypographyH2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0 w-max mx-auto",
        className
      )}
    >
      {children}
    </h2>
  );
}
