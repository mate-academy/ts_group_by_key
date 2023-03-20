type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  const arrayofValues = items
    .reduce((sum: string[], el: any) => [...sum, el[key]], []);

  arrayofValues.forEach((value: string) => {
    result[value] = items.filter((el: any) => el[key] === value);
  });

  return result;
}
