type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key:'keyof T'): GroupsMap<object> {
  // write code here;
  const groupped: GroupsMap<object> = {};

  items.forEach((i) => {
    if (!groupped[i[key]]) {
      groupped[i[key]] = [];
    }

    groupped[i[key]].push(i);
  });

  return groupped;
}
