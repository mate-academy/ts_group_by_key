type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = `${item[key]}`;

    if (groupMap[newKey]) {
      groupMap[newKey].push(item);
    } else {
      groupMap[newKey] = [item];
    }
  });

  return groupMap;
}
