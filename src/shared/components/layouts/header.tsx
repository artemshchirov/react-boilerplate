import Link from "next/link";
import { buttonVariants } from "../../../components/ui/button";
import MaxWidthWrapper from "./max-width-wrapper";

interface THeader {
  children?: React.ReactNode;
}

function Header({ children }: THeader) {
  return (
    <section className="sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 h-14 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <nav className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          {children}
        </nav>
      </MaxWidthWrapper>
    </section>
  );
}

export default Header;
