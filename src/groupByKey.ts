type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce(function (accumulator, currentValue) {
    const currentKey = String(currentValue[key]);

    if (currentKey in accumulator) {
      accumulator[currentKey].push(currentValue);
    } else {
      accumulator[currentKey] = [currentValue];
    }

    return accumulator;
  }, {} as GroupsMap<T>);
}
