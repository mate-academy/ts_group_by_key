type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const itemKey: string = String(item[key]);
    const grouped = { ...acc };

    if (!grouped[itemKey]) {
      grouped[itemKey] = [];
    }

    grouped[itemKey].push(item);

    return grouped;
  }, {} as GroupsMap<T>);
}
