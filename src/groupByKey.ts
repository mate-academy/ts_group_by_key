type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) {
  const result :GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (item.hasOwnProperty(String(item[key]))) {
      result[String(item[key])].push(item);
    } else {
      result[String(item[key])] = [item];
    }
  });

  return result;
}
