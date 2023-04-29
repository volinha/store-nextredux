import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types";

export interface SearchState {
    search: string;
    startupProducts: Product[];
}

const initialState: SearchState = {
    search: "",
    startupProducts: [],
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setStartupProducts: (state, action: PayloadAction<Product[]>) => {
            state.startupProducts = action.payload;
        },
    },
})

export const { setSearch, setStartupProducts } = searchSlice.actions;
export default searchSlice.reducer;