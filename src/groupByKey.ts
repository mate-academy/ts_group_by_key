type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const groupItems: GroupsMap<object> = {};

  items.forEach((item: object) => {
    groupItems[item[key]] = items.filter(
      (obj): boolean => obj[key] === item[key],
    );
  });

  return groupItems;
}
