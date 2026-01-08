import type { Item } from "./item.types";

type FilterableItemFields = Omit<Item, "id" | "name">;

export type FiltersTypes = {
  category: FilterableItemFields["category"] | null;
  status: FilterableItemFields["status"] | null;
  minPrice: FilterableItemFields["price"] | null;
  maxPrice: FilterableItemFields["price"] | null;
};
