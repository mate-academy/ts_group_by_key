
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = `${item[key]}`;

    if (result[newKey] === undefined) {
      result[newKey] = [item];
    } else {
      result[newKey].push(item);
    }
  });

  return result;
}
