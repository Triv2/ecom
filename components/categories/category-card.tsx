import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  href: string;
}

const CategoryCard = ({
  imageSrc,
  imageAlt,
  name,
  description,
  href,
}: CategoryCardProps) => {
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
      <h3 className="mt-6 text-sm text-gray-500">
        <Link href={href}>
          <span className="absolute inset-0" />
          {name}
        </Link>
      </h3>
      <p className="text-base font-semibold text-gray-900">{description}</p>
    </div>
  );
};
export default CategoryCard;
