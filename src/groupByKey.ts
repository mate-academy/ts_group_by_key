type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const groupValue = String(item[key]);

    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }

    groups[groupValue].push(item);
  }

  return groups;
}
