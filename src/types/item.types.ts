export type ItemStatus = "active" | "inactive";

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  status: ItemStatus;
}
