type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const groupedItems: GroupsMap<R> = {};

  items.forEach((item: R) => {
    const itemOnIteration = item[key] as string;

    if (itemOnIteration in groupedItems) {
      groupedItems[itemOnIteration].push(item);
    } else {
      groupedItems[itemOnIteration] = [item];
    }
  });

  return groupedItems;
}
