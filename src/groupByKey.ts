type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Array<Item>,
  key: keyof Item,
): GroupsMap<Object> {
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
