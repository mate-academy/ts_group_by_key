type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result = {} as GroupsMap<T>;

  items.forEach((el) => {
    const groupKey: string = String(el[key]);

    if (Object.prototype.hasOwnProperty.call(result, groupKey)) {
      result[groupKey] = [] as Array<T>;
    }

    result[groupKey].push(el);
  });

  return result;
}
