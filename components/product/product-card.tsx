import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  productId: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  price: string;
  subcategory: string;

}

const ProductCard = ({
  imageSrc,
  imageAlt,
  title,
  category,
  subcategory,
  price,
  productId,

}: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 aspect-none group-hover:opacity-75 h-80 shadow-lg border">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="p-1 px-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={productId}>
              <span aria-hidden="true" className="absolute inset-0" />

              <div className="flex items-center  gap-1">
                <p className="text-sm font-medium text-gray-800">{category}</p>\
                <p className="text-sm text-gray-500">{subcategory}</p>
              </div>
            </Link>
          </h3>
          <div className="flex items-center justify-between w-full ">
            <p className="text-sm font-bold text-gray-900"> {title}</p>
            <p className=" text-sm font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
