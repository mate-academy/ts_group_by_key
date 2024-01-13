type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  // write code here;
  const groupedItems: GroupsMap<R> = {};

  items.forEach((item: R) => {
    if (item[key] as string in groupedItems) {
      groupedItems[item[key] as string].push(item);
    } else {
      groupedItems[item[key] as string] = [item];
    }
  });

  return groupedItems;
}
