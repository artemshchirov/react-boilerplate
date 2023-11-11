import { ReactNode } from "react";
import { cn } from "@web/lib/utils";

export function TypographySmall({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <small className={cn("p-0 text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}
