type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const groupedItems: GroupsMap<object> = {};

  items.forEach((item) => {
    groupedItems[item[key]] = items.filter((el) => el[key] === item[key]);
  });

  return groupedItems;
}
