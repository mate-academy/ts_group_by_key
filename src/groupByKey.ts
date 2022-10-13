type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = item[key];

    if (result[`${currentKey}`] === undefined) {
      result[`${currentKey}`] = [item];
    } else {
      result[`${currentKey}`].push(item);
    }
  });

  return result;
}
