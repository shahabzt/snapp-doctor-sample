import type { FiltersTypes } from "../types/filters.types";
import type { Item } from "../types/item.types";

export function applyFilters(items: Item[], filters: FiltersTypes): Item[] {
  const { category, status, minPrice, maxPrice } = filters;

  return items.filter((item) => {
    if (category && item.category !== category) {
      return false;
    }

    if (status && item.status !== status) {
      return false;
    }

    if (minPrice  && item.price < minPrice) {
      return false;
    }

    if (maxPrice && item.price > maxPrice) {
      return false;
    }

    return true;
  });
}
