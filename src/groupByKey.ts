type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems = items.reduce((groups, item) => {
    const group = item[key] as string;

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(item);

    return groups;
  }, {} as GroupsMap<T>);

  return groupedItems;
}
