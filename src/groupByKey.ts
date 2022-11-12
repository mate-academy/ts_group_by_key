type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByValue: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (groupedByValue[value]) {
      groupedByValue[value].push(item);
    } else {
      groupedByValue[value] = [item];
    }
  });

  return groupedByValue;
}
