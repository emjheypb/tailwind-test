"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

const StickyNavbar = () => {
  const pathname = usePathname();
  const [isSticky, setSticky] = useState(false);
  // const [y, setY] = useState(0);

  const handleStickyNavbar = () => {
    // setY(window.scrollY);
    if (window.scrollY >= 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <nav className={``}>
      {/* {y} */}
      <div
        className={`hidden md:flex px-5 transition duration-500 ${
          isSticky ? "shadow-xl bg-transparent" : "shadow-none bg-gradient-to-b"
        } to-transparent from-white/75 fixed min-w-full gap-2 items-center`}
        onScroll={() => {
          alert("SCROLL");
        }}>
        <Logo />
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={`p-4 hover:font-bold ${
              pathname === link.href && "font-extrabold"
            }`}>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default StickyNavbar;
