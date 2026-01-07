import { memo } from "react";

import VirtualizedListComponent from "./virtualizedList";
import SearchInputComponent from "./searchInput";
import FiltersComponent from "./filters";

export const VirtualizedList = memo(VirtualizedListComponent);
export const SearchInput = memo(SearchInputComponent);
export const Filters = memo(FiltersComponent);
