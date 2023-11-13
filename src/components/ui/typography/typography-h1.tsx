import { cn } from "@web/lib/utils";

export function TypographyH1({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
    >
      {text}
    </h1>
  );
}
