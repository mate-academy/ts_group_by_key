type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result :GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey: string = String(item[key]);

    if (itemKey in result) {
      result[String(item[key])].push(item);
    } else {
      result[String(item[key])] = [item];
    }
  });

  return result;
}
