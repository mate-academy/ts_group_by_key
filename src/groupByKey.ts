type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T, key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element: any) => {
    result[element[key]] = [];
  });

  items.forEach((element: any) => result[element[key]].push(element));

  return result;
}
