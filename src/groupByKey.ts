type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, item: T) => {
    const keyValue = item[key] as unknown as string;

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }

    accumulator[keyValue].push(item);

    return accumulator;
  }, {} as GroupsMap<T>);
}
