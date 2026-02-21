type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const cloneItem: T[] = [...items];
  const res = {} as GroupsMap<T>;

  cloneItem.forEach((item: T) => {
    const keyValue = String(item[key]);

    if (!(keyValue in res)) {
      res[keyValue] = [];
    }

    res[keyValue].push(item);
  });

  return res;
}
