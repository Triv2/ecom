import Image from "next/image";

interface StoreCardProps {
  title:string;
  description:string;
  imageUrls:string[];

}

const StoreCard = ({
  title,
  description,
}:StoreCardProps) => {
  return (
<section className="flex  items-center justify-center h-auto w-auto bg-gradient-to-t from-neutral-100/50 to-white shadow-md rounded-md p-3">
  <div className="flex flex-col items-center justify-center w-[60%]">
  <h2>{title}</h2>
  <p className="">{description}</p>
  </div>
  <div className="flex flex-col items-center justify-center w-[30%]">
  <Image src="/landing/setup1.webp"alt="image" width={150} height={100} className="rounded-md shadow-md"/>
  <Image src="/landing/setup1.webp"alt="image" width={150} height={100} className="rounded-md shadow-md"/>
  <Image src="/landing/setup1.webp"alt="image" width={150} height={100} className="rounded-md shadow-md"/>
</div>

</section>
  );
}
export default StoreCard;