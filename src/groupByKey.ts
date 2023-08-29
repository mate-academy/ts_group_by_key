type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItemsGroup: GroupsMap<T> = {};

  items.reduce((acc: GroupsMap<T>, el: T) => {
    if (!(el[key] in acc)) {
      acc[el[key]] = [];
    }

    acc[el[key]].push(el);

    return acc;
  }, sortedItemsGroup);

  return sortedItemsGroup;
}
