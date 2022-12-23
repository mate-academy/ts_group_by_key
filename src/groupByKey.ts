type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, current) => {
    const groupKey = String(current[key]);
    const result = { ...prev };

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(current);

    return result;
  }, {} as GroupsMap<T>);
}
