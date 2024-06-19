"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "../components/custom-lists";
import { ImagePlaceholderSVG } from "@/components/images";

const sites = menuItems.slice(1);

const Home = () => {
  const banner1 = 700,
    banner2 = 1500;
  const [y, setY] = useState(0);

  const handleScrolling = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
  });

  return (
    <div
      onScroll={() => {
        handleScrolling();
      }}
      className="md:text-5xl text-4xl">
      <div className="relative h-[300vh] w-full -z-50">
        <div
          id="curtain"
          className={`fixed h-screen transition w-screen duration-300 bg-blue-200 translate-x-[33vw] pt-10 md:pt-32 px-4 ${
            y > banner1 && y < banner2
              ? "translate-x-[66.66vw]"
              : y > banner2
              ? "translate-x-full"
              : ""
          }`}>
          {y < banner1 ? (
            <div className={`h-full flex w-[63vw]`}>
              for some fun with Tailwind CSS?
            </div>
          ) : (
            <div className={`h-full flex w-[30vw]`}>
              translate-x to keep the overlay moving.
            </div>
          )}
        </div>
        <div
          id="content"
          className="fixed h-screen w-screen -z-10 flex text-center">
          <div
            className={`bg-red-300 h-full flex-1 flex flex-col pt-10 md:pt-32 px-4 justify-start items-center gap-4`}>
            Ready
            <ImagePlaceholderSVG width={undefined} height={undefined} />
          </div>
          <div
            className={`bg-yellow-200 h-full flex-1 flex flex-col pt-10 md:pt-32 px-4 justify-start items-center gap-4`}>
            Set
            <ImagePlaceholderSVG width={undefined} height={undefined} />
          </div>
          <div
            className={`bg-green-300 h-full flex-1 flex flex-col pt-10 md:pt-32 px-4 justify-start items-center gap-4`}>
            Go!
            <ImagePlaceholderSVG width={undefined} height={undefined} />
          </div>
        </div>
      </div>
      <div className={`bg-white h-screen flex flex-col px-10 pt-28 gap-4`}>
        <div className="text-3xl">
          Let&apos;s clone some home pages based on{" "}
          <Link
            href={
              "https://unbounce.com/landing-page-examples/best-landing-page-examples/"
            }
            className="text-blue-600 hover:font-extrabold"
            target="_blank">
            unbounce&apos;s best landing page examples list
          </Link>
        </div>
        {sites.map((site) => (
          <div key={site.id} className="pt-4 pl-4 flex flex-col">
            <Link
              href={site.href}
              target="_blank"
              className="hover:font-extrabold">
              {site.name}
            </Link>
            <Link href={site.local} className="text-xl hover:font-extrabold">
              {site.local}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
