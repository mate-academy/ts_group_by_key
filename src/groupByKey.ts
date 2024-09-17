type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!groupedByKey[property]) {
      groupedByKey[property] = [];
    }

    groupedByKey[property].push(item);
  });

  return groupedByKey;
}
