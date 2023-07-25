type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key];
    const itemKeyStr = itemKey as string;

    res[itemKeyStr] ??= [];
    res[itemKeyStr].push(item);
  });

  return res;
}
