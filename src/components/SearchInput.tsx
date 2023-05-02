"use client";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";

import { productApi } from "@/store/productApi";

import ProductsTable from "./ProductsTable";
import { Product } from "@/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupProducts = useAppSelector((state) => state.search.startupProducts);
  const data = useAppSelector(
    (state) =>
      state.productApi.queries[`search("${search}")`]?.data as Product[]
  );

  useEffect(() => {
    dispatch(productApi.endpoints.search.initiate(search));
  },[dispatch, search]);

  return (
    <div className="flex flex-col w-full overflow-hidden gap-3">
      <input
        type='text'
        className='text-black h-10 m-3'
        placeholder='Type your search...'
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      {search ? <h1>Results for: &quot;{search}&quot;</h1> : ""}
      <ProductsTable products={search.length ? data ?? [] : startupProducts} />
    </div>
  );
};

export default SearchInput;
