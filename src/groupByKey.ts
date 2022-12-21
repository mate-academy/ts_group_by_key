type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, current) => {
    const groupKey = current[key];
    const result = { ...prev };

    if (!result[groupKey as string]) {
      result[groupKey as string] = [];
    }

    result[groupKey as string].push(current);

    return result;
  }, {} as GroupsMap<T>);
}
