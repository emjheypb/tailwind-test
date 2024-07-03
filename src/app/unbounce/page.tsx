import { IoChatbubbleOutline } from "react-icons/io5";
import { ImagePlaceholderSVG } from "@/components/images";

const Unbounce = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="md:h-[99vh] bg-[#303030] w-screen xl:pl-44 px-4">
        <section className="w-full h-full text-white flex md:pt-28 pt-20 pb-10 gap-10">
          <div className="flex-1 flex flex-col gap-10 justify-center">
            <span className="md:text-6xl text-3xl">
              Convert 30% more with high-performing landing pages
            </span>
            <div className="flex-1 flex justify-end md:hidden">
              <ImagePlaceholderSVG />
            </div>
            <span>
              With Unbounce’s AI-powered landing page creation and optimization
              platform, you can build higher-converting campaigns that’ll help
              you scale your marketing without limits.
            </span>
            <button className="bg-white md:text-lg font-semibold text-black p-4 md:w-72 hover:bg-[#626262] hover:text-white">
              Start building for free
            </button>
          </div>
          <div className="flex-1 justify-end pr-4 pb-4 md:flex hidden">
            <ImagePlaceholderSVG />
          </div>
        </section>
        <section className="bg-white flex flex-col pt-20 pr-44 gap-10">
          <span className="text-5xl text-center">
            Scale campaigns and conversions with ease
          </span>
          <span className="text-center px-20">
            Unbounce has helped businesses turn billions of visitors into leads,
            sales, and signups. (Literally.) Our platform has every tool,
            template, and resource you need to build more high-converting
            campaigns and optimize from every angle.
          </span>
        </section>
      </div>
      <button className="fixed bottom-4 right-4 py-2 px-4 bg-[#0033FF] text-white rounded-full flex items-center gap-2">
        <IoChatbubbleOutline />
        Help
      </button>
    </main>
  );
};

export default Unbounce;
