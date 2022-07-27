type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key : keyof T) :GroupsMap<T> {
  const result : GroupsMap<T> = {};

  items.forEach((item) => {
    const itemsKey = String(item[key]);

    if (!result[itemsKey]) {
      result[itemsKey] = [];
    }

    result[itemsKey].push(item);
  });

  return result;
}
