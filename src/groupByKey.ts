type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result:GroupsMap<T> = {};

  items.forEach((element: T) => {
    const sortKey: any = element[key];

    if (result[sortKey]) {
      result[sortKey].push(element);
    } else {
      result[sortKey] = [element];
    }
  });

  return result;
}
