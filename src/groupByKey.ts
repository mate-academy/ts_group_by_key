type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const keyOfItem = String(item[key]);

    if (!result[keyOfItem]) {
      result[keyOfItem] = [];
    }

    result[keyOfItem].push(item);
  });

  return result;
}
