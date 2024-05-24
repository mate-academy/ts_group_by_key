type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]); // Перетворюємо ключ на рядок

    const filteredItems = items.filter((i) => i[key] === item[key]);

    if (!result[groupKey]) {
      result[groupKey] = filteredItems;
    }
  });

  return result;
}
