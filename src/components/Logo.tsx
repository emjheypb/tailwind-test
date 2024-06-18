const LogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-12 animate-bounce">
    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
  </svg>
);

const Logo = () => (
  <div className={`h-24 flex flex-row items-center gap-2`}>
    <LogoSVG />
    <span className={`text-3xl font-bold`}>Landing</span>
  </div>
);

export default Logo;
