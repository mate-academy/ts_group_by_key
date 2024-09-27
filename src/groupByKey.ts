type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator, currentValue) => {
    const groupKey = String(currentValue[key]);

    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }

    accumulator[groupKey].push(currentValue);

    return accumulator;
  }, {} as GroupsMap<T>);
}
