type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const currentValue = item[key] as string;

    if (!res[currentValue]) {
      res[currentValue] = [];
    }
    res[currentValue].push(item);
  }

  return res;
}
