"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../logo";
import { Button } from "../../../components/ui/button";

function HeaderFull({
  className,
  register = false,
  avatar = false,
}: {
  className?: string;
  register?: boolean;
  avatar?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  return (
    <header
      className={
        register
          ? "absolute top-0 bg-transparent w-full"
          : "sticky top-0 z-10 bg-white"
      }
    >
      <nav className="w-full h-auto mx-auto lg:relative lg:top-0">
        <div className="w-full h-auto mx-auto font-inter ">
          <div className="items-center p-5 justify-between hidden lg:py-[30px] lg:px-[44px] lg:flex ">
            <Logo />
            <div className="flex gap-5">
              <Button asChild variant="ghost">
                <Link className={register ? "text-white" : ""} href="/pricing">
                  Pricing
                </Link>
              </Button>
              {register ? (
                <Link className="text-white" href="/login">
                  <Button variant="default">Login</Button>
                </Link>
              ) : (
                <Link href="/register">
                  <Button variant="default">Create Free Account</Button>
                </Link>
              )}
              {avatar ? <Link href="#">Avatar</Link> : null}
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-6 lg:hidden lg:px-10 lg:py-4 xl:px-20">
            <Link href="#">Search</Link>
            <Link href="/">LOGO</Link>
            {/* <Link href="#">Avatar</Link> */}
          </div>
        </div>
        <div className="flex order-4 md:hidden">
          {/* <HamburgerMenu isSearchOpen={isSearchOpen} /> */}
        </div>
      </nav>
    </header>
  );
}

export default HeaderFull;
