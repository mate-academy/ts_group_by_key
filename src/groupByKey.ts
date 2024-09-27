type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((el) => {
    const valueByKey = String(el[key]);

    if (!(valueByKey in groups)) {
      groups[valueByKey] = [];
    }

    groups[valueByKey].push(el);
  });

  return groups;
}
