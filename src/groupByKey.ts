type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfItem = String(item[key]);

    if (!result[keyOfItem]) {
      result[keyOfItem] = [];
    }

    result[keyOfItem].push(item);
  });

  return result;
}
