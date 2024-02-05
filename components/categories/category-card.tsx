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
    <div className="group relative ">
      <div className="aspect-h-1 aspect-w-1 w-full  rounded-md bg-gray-200 aspect-none group-hover:opacity-75 shadow-lg border">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          className="h-full w-full  object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div>
        <div className="p-1 mt-4.5 px-1 flex flex-col justify-between">
      <div>
          <h3 className="text-sm text-gray-700">
            <Link href={href}>
              <span aria-hidden="true" className="absolute inset-0" />

              <div className="flex items-center  ">
                <p className="text-sm font-medium text-gray-800">{name}</p>
              </div>
            </Link>
          </h3>
          <div className="flex items-center justify-center w-full ">
            <p className="text-sm font-bold text-gray-900"> {description}</p>

          </div>
        </div>
      
      </div>
      </div>
    </div>
  );
};
export default CategoryCard;
