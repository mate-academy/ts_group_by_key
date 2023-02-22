type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((element: object) => {
    const currentKey: string = element[key as keyof object];

    if (result[currentKey]) {
      result[currentKey].push(element);

      return;
    }

    result[currentKey] = [element];
  });

  return result;
}
