type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  if (items.length === 0) {
    return {};
  }

  const result: GroupsMap<T>;

  items.forEach(item => item.includes(item.key) ? result.key = item.key);

  return result;
}
