type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  if (items.length === 0) {
    return {};
  }

  const objectGrouped: GroupsMap<T> = {};

  const valuesOfKey: any[] = [];

  items.forEach((item: T) => {
    if (!valuesOfKey.includes(item[key])) {
      valuesOfKey.push(item[key]);
    }
  });

  valuesOfKey.forEach((valueOfKey: any): void => {
    const valueOfKeyString = valueOfKey.toString();

    objectGrouped[valueOfKeyString] = items.filter((item: T) => {
      return item[key] === valueOfKey;
    });
  });

  return objectGrouped;
}
