interface ProductProps {
  company: string;
  title: string;
  children: any;
}

export default function Product(props: ProductProps) {
  return (
    <div className="mt-6 lg:mt-0 max-w-[445px] w-full flex flex-col px-4 pb-8 lg:p-0">
      <span className="uppercase text-orange-500 text-sm font-bold tracking-widest">
        {props.company}
      </span>

      <h1 className="text-3xl lg:text-5xl font-bold transition-colors mt-4 lg:mt-7">
        {props.title}
      </h1>

      {props.children}
    </div>
  );
}
