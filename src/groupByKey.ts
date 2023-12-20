type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: GroupsMap<T>[], key: keyof T)
  : GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfItem = item[key].toString();

    if (result[keyOfItem]) {
      result[keyOfItem].push(item);
    } else {
      result[keyOfItem] = [item];
    }
  });

  return result;
}
