import { ReactNode } from "react";
import { cn } from "@web/lib/utils";

export function TypographyMuted({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground underline", className)}>
      {children}
    </p>
  );
}
