type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    const char = String(item[key]);

    if (!sorted[char]) {
      sorted[char] = [];
    }

    sorted[char].push(item);
  });

  return sorted;
}
