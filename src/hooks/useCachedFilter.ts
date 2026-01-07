import { useRef, useMemo } from "react";

import type { Item } from "../types/item.types";

export const useCachedFilter = (items: Item[], value: string) => {
  const cache = useRef(new Map<string, Item[]>());
  const key = value.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    if (!key) return items;

    if (cache.current.has(key)) {
      return cache.current.get(key)!;
    }
    const result = items.filter((item) =>
      item.name.toLowerCase().includes(key)
    );

    cache.current.set(key, result);
    return result;
  }, [key, items]);

  return filteredItems;
};
