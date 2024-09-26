type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((total: GroupsMap<T>, currentItem: T) => {
    const currentKey: string = currentItem[key].toString();
    const groups: GroupsMap<T> = total;

    if (!groups[currentKey]) {
      groups[currentKey] = [];
    }

    groups[currentKey].push(currentItem);

    return groups;
  }, {});
}
