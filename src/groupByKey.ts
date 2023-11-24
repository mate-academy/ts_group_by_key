type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = String(item[key]);

    if (!result[value]) {
      const fromItems = items.filter((el) => String(el[key]) === value);

      result[value] = fromItems;
    }
  });

  return result;
}
