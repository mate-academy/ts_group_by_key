interface Item {
  [key: string]: any,
}

export function groupByKey<T extends Item, K extends keyof T>(
  items: T[],
  field: K,
):
  Record<T[K], T[]> {
  return items.reduce(
    (accumulator, item) => {
      const value = item[field];

      accumulator[value] = (accumulator[value] || []).concat(item);

      return accumulator;
    },
    {} as Record<T[K], T[]>
  );
}
