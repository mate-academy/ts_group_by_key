type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: string[],
  key: keyof T): GroupsMap<T> {
  // write code here;
  const sortObj = {};

  items.forEach((value) => {
    if (!sortObj[value[key]]) {
      sortObj[value[key]] = [];
    }

    sortObj[value[key]].push(value);
  });

  return sortObj;
}
