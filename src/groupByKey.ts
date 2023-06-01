type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey = String(item[key]);

    if (!Object.keys(groupKey).includes(valueOfKey)) {
      groupKey[valueOfKey] = [];
    }

    groupKey[valueOfKey].push(item);
  });

  return groupKey;
}
