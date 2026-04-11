type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const keyItem: unknown = item[key];

    if (typeof keyItem === 'string' || typeof keyItem === 'number') {
      if (result[keyItem]) {
        result[keyItem].push(item);
      } else {
        result[keyItem] = [];
        result[keyItem].push(item);
      }
    }
  });

  return result;
}
