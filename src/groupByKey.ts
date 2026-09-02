type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKeyValue: string = String(item[key]);

    if (Object.hasOwn(result, itemKeyValue)) {
      result[itemKeyValue].push(item);
    } else {
      result[itemKeyValue] = [item];
    }
  });

  return result;
}
