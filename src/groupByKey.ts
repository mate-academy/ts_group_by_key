type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const byGroup: GroupsMap<T> = {};

  items.forEach((element) => {
    const elKey = String(element[key]);

    if (!byGroup[elKey]) {
      byGroup[elKey] = [];
    }

    byGroup[elKey].push(element);
  });

  return byGroup;
}
