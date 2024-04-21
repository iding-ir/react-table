import { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../../types/items";
import { createAppSlice } from "../../createAppSlice";

export interface TableSliceState {
  items: Item[];
}

const initialState: TableSliceState = {
  items: [],
};

export const tableSlice = createAppSlice({
  name: "table",
  initialState,
  reducers: (create) => ({
    setItems: create.reducer((state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
    }),
  }),

  selectors: {
    selectItems: (table) => table.items,
  },
});

export const { setItems } = tableSlice.actions;

export const { selectItems } = tableSlice.selectors;
