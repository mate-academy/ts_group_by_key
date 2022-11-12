
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  let groupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key];

    if (typeof value === 'string' || typeof value === 'number') {
      if (!groupedByKey[value]) {
        groupedByKey = {
          ...groupedByKey,
          [value]: [],
        };
      }
      groupedByKey[value].push(item);
    }
  });

  return groupedByKey;
}
