"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "./custom-lists";

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
        } to-transparent from-white/75 fixed min-w-full gap-2 items-center`}>
        <Logo />
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`p-4 hover:font-bold ${
              pathname === item.href && "font-extrabold"
            }`}>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default StickyNavbar;
