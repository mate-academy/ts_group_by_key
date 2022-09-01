type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  function callback(prevItem: GroupsMap<T>, currentItem: T): GroupsMap<T> {
    const currentKey: string = String(currentItem[key]);
    const groupedObj: GroupsMap<T> = prevItem;

    if (!groupedObj[currentKey]) {
      groupedObj[currentKey] = [currentItem];
    } else {
      groupedObj[currentKey].push(currentItem);
    }

    return groupedObj;
  }

  return items.reduce(callback, {});
}
