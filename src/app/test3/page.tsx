const sections = [
  {
    bg: "bg-red-300",
    height: "h-96",
  },
  {
    bg: "bg-yellow-200",
    height: "h-80",
  },
  {
    bg: "bg-green-300",
    height: "h-72",
  },
  {
    bg: "bg-red-300",
    height: "h-64",
  },
  {
    bg: "bg-yellow-200",
    height: "h-60",
  },
  {
    bg: "bg-green-300",
    height: "h-56",
  },
  {
    bg: "bg-red-300",
    height: "h-52",
  },
  {
    bg: "bg-yellow-200",
    height: "h-48",
  },
  {
    bg: "bg-green-300",
    height: "h-44",
  },
  {
    bg: "bg-red-300",
    height: "h-40",
  },
  {
    bg: "bg-yellow-200",
    height: "h-36",
  },
  {
    bg: "bg-green-300",
    height: "h-32",
  },
  {
    bg: "bg-red-300",
    height: "h-28",
  },
  {
    bg: "bg-yellow-200",
    height: "h-24",
  },
  {
    bg: "bg-green-300",
    height: "h-20",
  },
  {
    bg: "bg-red-300",
    height: "h-16",
  },
  {
    bg: "bg-yellow-200",
    height: "h-14",
  },
  {
    bg: "bg-green-300",
    height: "h-12",
  },
];

const Landing3 = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {sections.map((section) => (
        <section
          key={section.bg}
          className={`${section.bg} ${section.height} min-w-full flex items-center justify-center`}>
          {section.height}
        </section>
      ))}
    </main>
  );
};

export default Landing3;
