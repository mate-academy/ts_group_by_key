type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = `${item[key]}`;

    if (currentKey in result) {
      result[currentKey].push(item);
    } else {
      result[currentKey] = [item];
    }
  });

  return result;
}
