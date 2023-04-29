"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setStartupProducts } from "@/store/searchSlice";
import { Product } from "@/types";

function Preloader({products} : {products: Product[]}){
    const loaded = useRef(false);
    if(!loaded.current){
        store.dispatch(setStartupProducts(products))
        loaded.current = true;
    }
    
    return null;
}

export default Preloader;