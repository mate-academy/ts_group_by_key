type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  // write code here;
  const obj: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const keyItem: string = items[i][key] as string;

    if (obj[keyItem]) {
      obj[keyItem].push(items[i]);
    } else {
      obj[keyItem] = [items[i]];
    }
  }

  return obj;
}
