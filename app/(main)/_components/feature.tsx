interface FeatureProps {
  title: string;
  icon: JSX.Element;
  description: string;
}

const Feature = ({ title, icon, description }: FeatureProps) => {
  return (
    <article
      className="border border-sky-800/30 rounded-md bg-gradient-to-br from-sky-100/40 to-neutral-100/30 
h-[200px] w-[200px] flex items-center justify-evenly p-2 flex-col shadow-md"
    >
      <div className="flex items-center justify-center h-[30%]  ">{icon}</div>
      <div className="flex flex-col  justify-start gap-2 h-[70%] ">
        <h3 className="text-xl font-sans  text-center font-bold">{title}</h3>
        <p className="text-sm font-serif text-muted-foreground ">
          {description}
        </p>
      </div>
    </article>
  );
};
export default Feature;
