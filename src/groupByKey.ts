type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[],
  key: keyof T):GroupsMap<T> {
  return items.reduce((acc:GroupsMap<T>, item: T) => {
    const currItem = `${item[key]}`;
    const result = { ...acc };

    if (result[currItem]) {
      result[currItem].push(item);
    } else {
      result[currItem] = [item];
    }

    return result;
  }, {});
}
