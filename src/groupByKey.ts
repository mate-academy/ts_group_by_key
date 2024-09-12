type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = `${item[key]}`;

    if (result[objKey]) {
      result[objKey].push(item);
    } else {
      result[objKey] = [item];
    }
  });

  return result;
}
