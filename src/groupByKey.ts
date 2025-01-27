type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;
  const res: GroupsMap<T> = {};

  for (const el of items) {
    const temp: string = `${el[key]}`;

    if (temp in res) {
      res[temp].push(el);
    } else {
      res[temp] = [el];
    }
  }

  return res;
}
