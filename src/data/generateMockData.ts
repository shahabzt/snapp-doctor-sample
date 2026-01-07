import type { Item, ItemStatus } from "../types/item.types";

const CATEGORIES = ["doctor", "dentist", "clinic", "lab"] as const;
const NAME = [
  "Ali",
  "Sara",
  "Farhad",
  "Hossein",
  "Shahab",
  "Fatemeh",
  "Amir",
  "Pouya",
  "Samira",
  "Amir Reza",
  "Ilya",
  "Sima",
  "Neda",
  "Reza",
  "Mina",
  "Abolfazl",
  "Hamed",
  "Navid",
  "Kaveh",
  "Parisa",
] as const;

function randomFromArray<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomStatus(): ItemStatus {
  return Math.random() > 0.5 ? "active" : "inactive";
}

export function generateMockData(count: number): Item[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: randomFromArray(NAME),
    category: randomFromArray(CATEGORIES),
    price: randomNumber(50, 500),
    status: randomStatus(),
  }));
}
