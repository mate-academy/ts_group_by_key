type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (Object.keys(result).includes(newKey)) {
      result[newKey].push(item);
    } else {
      result[newKey] = [item];
    }
  });

  return result;
}
