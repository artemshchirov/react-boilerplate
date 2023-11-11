"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../../../components/ui/button";
import MaxWidthWrapper from "./max-width-wrapper";
import Header from "./header";

function HeaderWithLogo({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  return (
    <section className={className}>
      {/* NAVBAR */}
      <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0">
        {/* CONTAINER */}
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          {/* SVG LOGO - YOU CAN REPLACE THIS */}
          <Link href="#">LOGO</Link>
          {/* MENU CONTENT 1 */}
          <div className="flex flex-col space-y-8 mt-14 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
            <Link
              className="rounded-lg font-inter lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              href="#"
            >
              Templates
            </Link>
            <Link
              className="rounded-lg font-inter lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="pb-8 rounded-lg font-inter lg: lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              href="#"
            >
              FAQs
            </Link>
          </div>
          {/* MENU CONTENT 2 */}
          <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
            <Link
              className="rounded-lg font-inter lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              href="#"
            >
              Sign Up
            </Link>
            <Link
              className="px-8 py-4 text-center text-white bg-black rounded-lg font-inter hover:bg-gray-800"
              href="#"
            >
              Login
            </Link>
          </div>
          {/* BURGER MENU */}
          <Link className="absolute right-5 lg:hidden" href="#">
            SVG
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default HeaderWithLogo;
