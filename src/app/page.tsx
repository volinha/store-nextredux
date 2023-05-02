import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";

import { store } from "@/store";
import { setStartupProducts } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupProducts(data));

  return (
    <main>
      <Preloader products={data} />
      <Providers>
        <div className="flex flex-col items-center justify-center">

        <SearchInput />
        </div>
      </Providers>
    </main>
  );
}
