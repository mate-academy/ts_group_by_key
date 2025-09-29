type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  // write code here;
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const group = String(item[key]);

    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);

    return acc;
  }, {});
}
