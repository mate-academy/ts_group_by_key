type GroupsMap<T> = {
  [key: string]: T[];
};

interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  // eslint-disable-next-line max-len
  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
  has(value: T): boolean;
  readonly size: number;
}

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const workItems: T[] = JSON.parse(JSON.stringify(items));
  const uniqueValues: Set<T> = new Set();
  const groupOfObjects: GroupsMap<T> = {};

  workItems.forEach((item: any) => {
    uniqueValues.add(item[key]);
  });

  uniqueValues.forEach((value: any) => {
    const byType: T[] = workItems
      .filter((item: T) => item[key] === value);

    groupOfObjects[value] = byType;
  });

  return groupOfObjects;
}
