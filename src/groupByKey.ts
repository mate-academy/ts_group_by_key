type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const obj: GroupsMap<T> = {};

  items.forEach((element) => {
    const x = String(element[key]);

    if (!obj[x]) {
      obj[x] = [];
    }

    obj[x].push(element);
  });

  return obj;
}
