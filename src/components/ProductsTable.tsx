import { Product } from "@/types";
import { table } from "console";

const ProductsTable = ({ products }: { products: Product[] }) => {
  return (
    <div className='grid grid-cols-6 grid-flow-row gap-3 w-full p-3'>
      {products.map((products) => (
        <div
          key={products.name}
          className='flex flex-col relative justify-center items-center h-60 bg-slate-400 rounded'>
          <div className='font-bold'>{products.name}</div>
          <div>R$ {products.price}</div>
          <div className="absolute bottom-2 right-2 w-8 aspect-square rounded-full bg-green-400 justify-center items-center flex text-2xl text-black">+</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsTable;
