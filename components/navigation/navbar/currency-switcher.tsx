import Image from "next/image";
import Link from "next/link";

interface CurrencySwitcherProps {}

const CurrencySwitcher = () => {
  return (
    <Link
      href="#"
      className="flex items-center text-gray-700 hover:text-gray-800"
    >
      <Image
        width={150}
        height={150}
        src="/landing/work1.webp"
        alt=""
        className="block h-auto w-5 flex-shrink-0"
      />
      <span className="ml-3 block text-sm font-medium">CAD</span>
      <span className="sr-only">, change currency</span>
    </Link>
  );
};
export default CurrencySwitcher;
