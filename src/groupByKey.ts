type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: any[], key: keyof T): GroupsMap<object> {
  const groupped: GroupsMap<object> = {};

  items.forEach((item) => {
    if (!groupped[item[key]]) {
      groupped[item[key]] = [];
    }

    groupped[item[key]].push(item);
  });

  return groupped;
}
