type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<Object> {
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
