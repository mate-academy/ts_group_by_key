type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyForGroup: string = item[key as keyof object];

    if (!groupsMap[keyForGroup]) {
      groupsMap[keyForGroup] = [];
    }

    groupsMap[keyForGroup].push(item);
  });

  return groupsMap;
}
