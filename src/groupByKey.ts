type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItemsGroup: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const objectKey = el[key];

    if (!sortedItemsGroup[objectKey]) {
      sortedItemsGroup[objectKey] = [];
    }

    sortedItemsGroup[objectKey].push(el);
  });

  return sortedItemsGroup;
}
