type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev: GroupsMap<T>, item) => {
    const groupKey = item[key] as string;
    const groupItems = prev[groupKey] || [];

    groupItems.push(item);

    return {
      ...prev,
      [groupKey]: groupItems,
    };
  }, {});
}
