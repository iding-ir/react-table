import { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../../types/items";
import { createAppSlice } from "../../createAppSlice";
import { getFilteredItems } from "../../../methods";

export interface TableSliceState {
  items: Item[];
  size: number;
  page: number;
  filter: string;
}

const initialState: TableSliceState = {
  items: [],
  size: 10,
  page: 1,
  filter: "",
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
    selectItems: ({ items }) => items,
    selectFilteredItems: ({ items, filter }) => getFilteredItems(items, filter),
    selectCurrentItems: ({ items, size, page, filter }) =>
      getFilteredItems(items, filter).slice((page - 1) * size, page * size),
    selectSize: ({ size }) => size,
    selectPage: ({ page }) => page,
    selectCanPaginatePrev: ({ page }) => page > 1,
    selectCanPaginateNext: ({ page, items, size, filter }) =>
      page < Math.ceil(getFilteredItems(items, filter).length / size),
    selectTotalPages: ({ items, size, filter }) =>
      Math.ceil(getFilteredItems(items, filter).length / size),
    selectFilter: ({ filter }) => filter,
    selectSections: ({ items }) => [
      ...new Set(items.map((item) => item.section)),
    ],
  },
});

export const { setItems, setSize, setPage, setFilter } = tableSlice.actions;

export const {
  selectItems,
  selectFilteredItems,
  selectCurrentItems,
  selectSize,
  selectPage,
  selectCanPaginatePrev,
  selectCanPaginateNext,
  selectTotalPages,
  selectFilter,
  selectSections,
} = tableSlice.selectors;
