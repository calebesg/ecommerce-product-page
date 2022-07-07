interface ProductProps {
  company: string;
  title: string;
  children: any;
}

export default function Product(props: ProductProps) {
  return (
    <div className="max-w-[445px] w-full flex flex-col">
      <span className="uppercase text-orange-500 text-sm font-bold tracking-widest">
        {props.company}
      </span>

      <h1 className="text-5xl font-bold transition-colors mt-7">
        {props.title}
      </h1>

      {props.children}
    </div>
  );
}
