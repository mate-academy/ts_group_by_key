type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueKey = String(item[key]);

    if (!obj[valueKey]) {
      obj[valueKey] = [item];
    } else {
      obj[valueKey].push(item);
    }
  });

  return obj;
}
