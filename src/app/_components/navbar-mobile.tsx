"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "landing1",
    name: "Landing 1",
    href: "/landing1",
  },
  {
    id: "landing2",
    name: "Landing 2",
    href: "/landing2",
  },
  {
    id: "landing3",
    name: "Landing 3",
    href: "/landing3",
  },
];

const CloseSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const MenuSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const MobileNavbar = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
        className="fixed p-4 right-0 md:hidden">
        <MenuSVG />
      </button>
      <nav
        className={`fixed flex flex-col h-screen transition duration-300 bg-white w-9/12 ${
          isMobileMenuHidden ? "-translate-x-full" : "translate-x-0"
        } md:hidden`}>
        <div className="shadow-md pl-4">
          <Logo />
        </div>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={`p-4`}
            onClick={() => setIsMobileMenuHidden(true)}>
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
