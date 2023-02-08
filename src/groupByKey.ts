type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const r: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!r[String(item[key])]) {
      r[String(item[key])] = items
        .filter((i) => i[key] === item[key]);
    }
  });

  return r;
}
