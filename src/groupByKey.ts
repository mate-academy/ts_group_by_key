type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    if (!grouped[String(items[i][key])]) {
      grouped[String(items[i][key])] = [];
    }

    grouped[String(items[i][key])].push(items[i]);
  }

  return grouped;
}
