type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue: string = String(item[key]);

    if (keyValue in groups) {
      groups[keyValue].push(item);
    } else {
      groups[keyValue] = [item];
    }
  });

  return groups;
}
