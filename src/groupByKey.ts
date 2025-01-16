type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce(function (previousValue, currentItem) {
    const keyValue: string = String(currentItem[key]);

    if (!previousValue[keyValue]) {
      previousValue[keyValue] = [];
    }
    previousValue[keyValue].push(currentItem);

    return previousValue;
  }, {} as GroupsMap<T>);
}
