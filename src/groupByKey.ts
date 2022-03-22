type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groped: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String([item[key]]);

    if (!groped[currentKey]) {
      groped[currentKey] = [item];
    } else {
      groped[currentKey].push(item);
    }
  });

  return groped;
}
