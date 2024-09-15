type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as unknown as string;

    if (groups[keyValue]) {
      groups[keyValue].push(item);
    } else {
      groups[keyValue] = [item];
    }
  });

  return groups;
}
