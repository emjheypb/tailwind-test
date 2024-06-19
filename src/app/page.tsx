"use client";
import { useEffect, useState } from "react";

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
          className={`fixed h-screen transition w-screen duration-300 bg-blue-200 translate-x-[33vw] pt-32 px-4 ${
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
          <div className={`bg-red-300 h-full flex-1 flex pt-32 justify-center`}>
            Ready
          </div>
          <div
            className={`bg-yellow-200 h-full flex-1 flex pt-32 justify-center`}>
            Set
          </div>
          <div
            className={`bg-green-300 h-full flex-1 flex pt-32 justify-center`}>
            Go!
          </div>
        </div>
      </div>
      <div className={`bg-white h-screen flex flex-col px-10 pt-28`}>
        <section className="border-2">Section 1</section>
        <section className="border-2">Section 2</section>
        <section className="border-2">Section 3</section>
      </div>
    </div>
  );
};

export default Home;
