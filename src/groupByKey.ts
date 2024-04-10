type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: number;
};

export function groupByKey(items: Array<Item>, key: string): GroupsMap<Object> {
  // write code here ;
  const result: GroupsMap<typeof items> = {};

  items.forEach((item: any) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
