import { cn } from "@web/shared/lib/utils";
import MaxWidthWrapper from "./max-width-wrapper";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={cn(className)}>
      {/* <MaxWidthWrapper> */}
      {children}
      {/* </MaxWidthWrapper> */}
    </section>
  );
}

export default Section;
