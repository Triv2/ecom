import Image from "next/image";
import ProductCard from "./product-card";

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

  // More products...
];
interface ProductListProps {
  title: string;
}

const ProductList = ({ title }: ProductListProps) => {
  return (
    <section className="flex items-center justify-center flex-col gap-1 p-2 w-full">
      <div className=" px-4 py-16 sm:px-6 sm:py-24 max-w-7xl w-full">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 gap-y-10 gap-x-8 h-full w-full">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
