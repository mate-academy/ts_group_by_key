type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const checkingKey = String(item[key]);

    if (!result[checkingKey]) {
      result[checkingKey] = [];
    }

    result[checkingKey].push(item);
  });

  return result;
}
