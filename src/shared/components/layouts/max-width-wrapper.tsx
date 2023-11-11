import { cn } from "@web/shared/lib/utils";

interface TProps {
  className?: string;
  children: React.ReactNode;
}

function MaxWidthWrapper({ className, children }: TProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
