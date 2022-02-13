type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[],
  key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const groupKey = `${el[key]}`;

    if (!result[groupKey]) {
      result[groupKey] = [el];
    } else {
      result[groupKey].push(el);
    }
  });

  return result;
}
