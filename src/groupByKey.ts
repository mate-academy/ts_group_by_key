
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedObjItem: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = `${item[key]}`;

    if (sortedObjItem[currentKey]) {
      sortedObjItem[currentKey].push(item);
    } else {
      sortedObjItem[currentKey] = [item];
    }
  });

  return sortedObjItem;
}
