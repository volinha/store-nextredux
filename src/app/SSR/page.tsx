import ProductsTable from "@/components/ProductsTable";
import SSRProductsTable from "@/components/SSRProductsTable";

import { store } from "@/store";
import { setStartupProducts } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupProducts(data));

  return (
    <main>
      <SSRProductsTable />
    </main>
  )
}
