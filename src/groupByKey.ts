type GroupsMap<T> = {
  [key: string]: T[];
};

interface Item {
  [x: string]: string | number,
}
type Key = string;

export function groupByKey(items:Item[], key:Key):GroupsMap<Item> {
  const groupingResult:GroupsMap<Item> = {};

  const resultKeys:Key[] = Array.from(new Set(items
    .map((el: Item) => String(el[key]))));

  resultKeys.forEach((resultKey:Key) => {
    groupingResult[resultKey] = items
      .filter((item: Item) => String(item[key]) === resultKey);
  });

  return groupingResult;
}
