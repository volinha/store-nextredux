import ProductsTable from "./ProductsTable";

import { store } from "@/store";

function SSRProductsTable() {
    return (
        <div>
            <ProductsTable products={store.getState().search.startupProducts} />
        </div>
    )
}

export default SSRProductsTable;