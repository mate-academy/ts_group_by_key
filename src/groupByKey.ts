type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((previous: Record<string, T[]>, item: T) => {
    const previousCopy = { ...previous };
    const itemKey = String(item[key]);

    if (!previousCopy[itemKey]) {
      previousCopy[itemKey] = [];
    }

    previousCopy[itemKey].push(item);

    return previousCopy;
  }, {});
}
