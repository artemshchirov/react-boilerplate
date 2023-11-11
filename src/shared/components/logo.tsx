import Image from "next/image";
import Link from "next/link";
import { logoImage } from "../../../public/images";
import { cn } from "../lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("max-h-6 max-w-40", className)}>
      <Image
        src={logoImage}
        alt="Widegamut"
        className={cn("max-h-6 w-40", className)}
      />
    </Link>
  );
}

export default Logo;
