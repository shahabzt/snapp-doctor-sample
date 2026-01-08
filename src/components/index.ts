import { memo } from "react";

import VirtualizedListComponent from "./virtualizedList";
import SearchInputComponent from "./searchInput";
import CategoryFilterComponent from "./filters/categoryFilters";
import PriceFilterComponent from "./filters/priceFilters";
import StatusFilterComponent from "./filters/statusFilters";

export const VirtualizedList = memo(VirtualizedListComponent);
export const SearchInput = memo(SearchInputComponent);
export const CategoryFilter = memo(CategoryFilterComponent);
export const PriceFilter = memo(PriceFilterComponent);
export const StatusFilter = memo(StatusFilterComponent);
