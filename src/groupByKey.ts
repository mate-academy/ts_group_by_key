type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: any = {};

  items.forEach((element: T) => {
    const value = element[key];

    if (!result[value]) {
      const arr = [element];

      result[value] = arr;
    } else {
      result[value].push(element);
    }
  });

  return result;
}
