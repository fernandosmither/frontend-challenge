import { ShoppingCartIcon, PlusCircleIcon } from '@heroicons/react/20/solid'

interface Product {
  id: number;
  name: string;
  concentration: string;
  display: string; // ALT for the image
  availability: {
    status: string;
  };
  imagesUrl: string;
  format: string;
}

export type Products = {
  payload: Product[];
}

export const RemainingItem = (product:Product) => {
  return (
    <>
  <article className="flex items-center justify-between py-4 px-8">
    <div className='flex pr-20'>
      <img src={product.imagesUrl} alt={product.display} className="h-20 w-20" />
      <div className="flex flex-col justify-center px-4">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <p className="text-sm font-regular opacity-[.54]">{product.concentration}</p>
        <a href="#" className={`text-sm underline ${product.id == 1 ? "text-inventuresRed" : "text-inventuresBlue"}`}>Quedan 5 {product.format} para 30 días</a>
      </div>
    </div>
    <button className='relative'>
      <PlusCircleIcon className="h-6 w-6 bg-red-500 text-red-800 absolute bottom-3 left-3 text-inventuresBlue" />
      <ShoppingCartIcon className="h-6 w-6 bg-red-500 text-red-800" />
    </button>
  </article>
  <hr className='border opacity-50'/>
  </>
  );
}
