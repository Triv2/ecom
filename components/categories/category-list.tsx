import Image from "next/image";
import CategoryCard from "./category-card";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc: "/landing/work1.webp",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc: "/landing/work1.webp",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

interface CategoryListProps {
  title: string;
}

export const CategoryList = ({ title }: CategoryListProps) => {
  return (
    <section className="flex items-center justify-center flex-col gap-1 p-2 w-full">
      <div className=" px-4 py-16 sm:px-6 sm:py-24 max-w-7xl w-full">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-evenly gap-2 gap-y-10 gap-x-8 h-full w-full">
          {callouts.map((callout) => (
            <CategoryCard
              key={callout.name}
              name={callout.name}
              imageSrc={callout.imageSrc}
              imageAlt={callout.imageAlt}
              description={callout.description}
              href={callout.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
