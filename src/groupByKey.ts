type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!res[keyValue]) {
      res[keyValue] = [];
    }

    res[keyValue].push(item);
  });

  return res;
}
