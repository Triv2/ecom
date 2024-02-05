"use client";

import Image from "next/image";
import ProductCard from "./product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const products = [
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },
  {
    id: "1",
    name: "Basic Tee",
    href: "#",
    imageSrc: "/landing/work1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",

    category: "Men",
    subcategory: "Tee",
  },

  // More products...
];
interface ProductListProps {
  title: string;
}

const ProductList = ({ title }: ProductListProps) => {
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
      <div className=" px-4  sm:px-6  max-w-7xl w-full h-full">
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
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.name}
                className=" md:basis-1/2  "
              >
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  productId={product.id}
                  title={product.name}
                  price={product.price}
                  category={product.category}
                  subcategory={product.subcategory}
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
          setApi={setApi}
          className="w-full max-w-lg sm:hidden flex justify-center items-center py-5 px-2"
        >
         <CarouselContent className="-mt-1 h-[300px]">
            {products.map((product) => (
              <CarouselItem
                key={product.name}
                className=" md:basis-1/2  "
              >
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  productId={product.id}
                  title={product.name}
                  price={product.price}
                  category={product.category}
                  subcategory={product.subcategory}
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
export default ProductList;
