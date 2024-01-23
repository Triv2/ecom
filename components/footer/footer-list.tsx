import Link from "next/link";

interface FooterListProps {
  title: string;
  links: string[];
}

const FooterList = ({ title, links }: FooterListProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{title}</p>
      <div className="flex flex-col items-center justify-center gap-2 pt-1">
        {links.map((link, index) => (
          <Link
            href={link}
            key={index}
            className="text-sky-400/80 hover:text-sky-400"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FooterList;
