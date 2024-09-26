type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedItems, item: T) : GroupsMap<T> => {
    const keyValue = item[key] as string;
    const grpdItems : GroupsMap<T> = { ...groupedItems };

    if (grpdItems[keyValue]) {
      grpdItems[keyValue].push(item);
    } else {
      grpdItems[keyValue] = [item];
    }

    return grpdItems;
  }, {});
}
