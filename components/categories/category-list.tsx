'use client'
import Image from "next/image";
import CategoryCard from "./category-card";


import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Don't want too many best selling products. Limiting this to 3 sets of 3.

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="flex ">
      <div className=" px-4  sm:px-6  max-w-7xl w-full h-full ">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-20">
          {title}
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-lg hidden sm:flex justify-center items-center py-5 px-2"
        >
          <CarouselContent >
            {callouts.map((callout, index: number) => (
              <CarouselItem
                key={callout.name}
                className=" md:basis-1/2  "
              >
                <CategoryCard
                  key={callout.name}
                  name={callout.name}
                  imageSrc={callout.imageSrc}
                  imageAlt={callout.imageAlt}
                  description={callout.description}
                  href={callout.href}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Mobile */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="flex sm:hidden "
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {callouts &&
              callouts.map((callout, index) => (
                <CarouselItem key={index} className=" gap-2">
                  <CategoryCard
                    key={callout.name}
                    name={callout.name}
                    imageSrc={callout.imageSrc}
                    imageAlt={callout.imageAlt}
                    description={callout.description}
                    href={callout.href}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
