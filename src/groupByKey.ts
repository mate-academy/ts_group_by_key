type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedResult: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupedResult[value]) {
      groupedResult[value] = [item];
    } else {
      groupedResult[value].push(item);
    }
  });

  return groupedResult;
}
