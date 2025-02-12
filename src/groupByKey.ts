type GroupsMap<T> = {
  [key: string]: T[];
};

type Items = {
  [key: string]: number | string;
};

export function groupByKey(items: Items[], key: string): GroupsMap<Items> {
  const result: GroupsMap<Items> = {};

  items.forEach((element: Items) => {
    if (!result[element[key]]) {
      result[element[key]] = [element];
    } else {
      result[element[key]].push(element);
    }
  });

  return result;
}
