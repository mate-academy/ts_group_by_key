type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key as keyof T];

    if (!groups[String(keyValue)]) {
      groups[String(keyValue)] = [];
    }

    groups[String(keyValue)].push(item);
  });

  return groups;
}
