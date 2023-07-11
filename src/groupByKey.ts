type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems = items.reduce((accumulator, currentValue) => {
    const group = currentValue[key] as string;

    if (!accumulator[group]) {
      accumulator[group] = [];
    }
    accumulator[group].push(currentValue);

    return accumulator;
  }, {} as GroupsMap<T>);

  return groupedItems;
}
