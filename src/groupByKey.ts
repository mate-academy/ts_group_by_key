type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key] as string;

    if (!obj[itemKey]) {
      obj[itemKey] = [];
    }

    obj[itemKey].push(item);
  });

  return obj;
}
