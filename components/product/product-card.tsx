import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  store: string;
}

const ProductCard = ({
  image,
  title,
  category,
  store,
  price,
}:ProductCardProps) => {
  return (
    <div className="w-full h-full bg-slate-100/50 rounded-md shadow-md p-3">
      
      <article className="flex items-center justify-between ">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{price}</p>
      </article>
      
      
      
      <Image
        src={image}
        alt={image}
        height={100}
        width={150}
        className="bg-fixed bg-cover"
      />
      <article className="flex items-center justify-between ">
       
       <p>{category}</p>
       <p>{store}</p>
       </article>
       
    </div>
  );
};
export default ProductCard;
