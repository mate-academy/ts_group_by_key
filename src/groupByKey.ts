
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const GroupsMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (!GroupsMap[itemKey]) {
      GroupsMap[itemKey] = [];
    }

    GroupsMap[itemKey].push(item);
  });

  return GroupsMap;
}
