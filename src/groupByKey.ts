type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupValue = String(item[key]);

    if (!groups[groupValue]) {
      groups[groupValue] = [item];
    } else {
      groups[groupValue].push(item);
    }

    return groups;
  }, {} as GroupsMap<T>);
}
