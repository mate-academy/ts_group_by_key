type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const property = item[key];

    result[property] = result[property] || [];
    result[property].push(item);
  });

  return result;
}
