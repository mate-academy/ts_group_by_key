type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: any }>(
  items: T[],
  key: string,
): GroupsMap<T> {
  return items.reduce((
    acc: GroupsMap<T>,
    item: T,
  ) => {
    if (!acc[item[key]]) {
      acc[item[key]] = [];
    }

    acc[item[key]].push(item);

    return acc;
  }, {});
}
