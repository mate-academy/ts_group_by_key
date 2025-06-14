type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};
  const uniqueSet = new Set();

  items.forEach((item) => {
    if (!uniqueSet.has(item[key])) {
      uniqueSet.add(item[key]);
    }
  });

  const unique = [...uniqueSet];

  unique.forEach((item) => {
    groups[item as any] = items.filter((i) => i[key] === item);
  });

  return groups;
}
