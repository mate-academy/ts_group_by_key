type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((newArray: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    if (!newArray[groupKey]) {
      newArray[groupKey] = [];
    }
    newArray[groupKey].push(item);

    return newArray;
  }, {} as GroupsMap<T>);
}
