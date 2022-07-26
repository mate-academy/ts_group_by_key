type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: string[],
  key: string): GroupsMap<T> {
  // write code here;
  const obj = {};

  items.forEach((i) => {
    if (!obj[i[key]]) {
      obj[i[key]] = [];
    }

    obj[i[key]].push(i);
  });

  return obj;
}
