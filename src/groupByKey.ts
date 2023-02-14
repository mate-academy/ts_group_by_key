type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.map((item) => {
    const keyOfItem: string = String(item[key]);

    if (keyOfItem in result) {
      result[keyOfItem].push(item);
    } else {
      result[keyOfItem] = [item];
    }

    return null;
  });

  return result;
}
