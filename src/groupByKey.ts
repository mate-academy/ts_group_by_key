type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  let current;

  for (let i = 0; i < items.length; i += 1) {
    current = String(items[i][key]);

    if (!result[current]) {
      result[current] = [];
    }

    result[current].push(items[i]);
  }

  return result;
}
