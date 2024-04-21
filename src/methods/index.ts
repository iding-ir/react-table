import { Item } from "../types/items";

export const getFilteredItems = (items: Item[], filter: string) =>
  filter ? items.filter((item) => item.section === filter) : items;

export const getFirstItemIndex = (page: number, size: number) =>
  (page - 1) * size + 1;

export const getlastItemIndex = (
  page: number,
  size: number,
  availableItems: Item[]
) =>
  page * size > availableItems.length ? availableItems.length : page * size;
