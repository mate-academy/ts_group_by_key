type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj: T) => {
    const newKey = String(obj[key]);

    if (!result[newKey]) {
      result[newKey] = [];
    }

    result[newKey].push(obj);
  });

  return result;
}
