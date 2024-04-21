import { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../../types/items";
import { createAppSlice } from "../../createAppSlice";

export interface TableSliceState {
  items: Item[];
  size: number;
  page: number;
  filter: string | null;
}

const initialState: TableSliceState = {
  items: [],
  size: 10,
  page: 1,
  filter: null,
};

export const tableSlice = createAppSlice({
  name: "table",
  initialState,
  reducers: (create) => ({
    setItems: create.reducer((state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
    }),
    setSize: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.size = payload;
    }),
    setPage: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    }),
    setFilter: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    }),
  }),

  selectors: {
    selectItems: (table) => table.items,
    selectCurrentItems: ({ items, size, page }) =>
      items.slice((page - 1) * size, page * size),
    selectSize: (table) => table.size,
    selectPage: (table) => table.page,
    selectTotalPages: ({ items, size }) => Math.ceil(items.length / size),
    selectFilter: (table) => table.filter,
  },
});

export const { setItems, setSize, setPage, setFilter } = tableSlice.actions;

export const {
  selectItems,
  selectCurrentItems,
  selectSize,
  selectPage,
  selectTotalPages,
  selectFilter,
} = tableSlice.selectors;
