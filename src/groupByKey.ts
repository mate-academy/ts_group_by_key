type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;

  return items.reduce((accumulator, currentValue) => {
    const keyValue = currentValue[key] as string;

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }

    accumulator[keyValue].push(currentValue);

    return accumulator;
  }, {} as GroupsMap<T>);
}
