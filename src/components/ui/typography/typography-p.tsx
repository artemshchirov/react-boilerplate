import { ReactNode } from "react";
import { cn } from "@web/lib/utils";

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
