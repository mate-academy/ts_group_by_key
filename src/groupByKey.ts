type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, currentItem: T) => {
    const keyValue = String(currentItem[key]);

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }
    accumulator[keyValue].push(currentItem);

    return accumulator;
  }, {});
}
