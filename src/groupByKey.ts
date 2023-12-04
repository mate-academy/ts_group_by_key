type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, item) => {
    const groupKey = item[key] as string;

    return {
      ...prev,
      [groupKey]: groupKey in prev
        ? [...prev[groupKey], item]
        : [item],
    };
  }, {} as GroupsMap<T>);
}
