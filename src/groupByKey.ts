type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const arrKey = String(item[key]);

    if (!result[arrKey]) {
      result[arrKey] = [];
    }

    result[arrKey].push(item);
  });

  return result;
}
