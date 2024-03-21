type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];
    const keyValue = String(value);

    if (keyValue in groups) {
      groups[keyValue].push(item);
    } else {
      groups[keyValue] = [item];
    }
  }

  return groups;
}
