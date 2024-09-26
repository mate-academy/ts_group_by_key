type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!groups[keyValue]) {
      groups[keyValue] = [];
    }

    groups[keyValue].push(item);
  });

  return groups;
}
