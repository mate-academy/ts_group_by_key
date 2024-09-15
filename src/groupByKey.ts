type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortKey : string = String(item[key]);

    if (!groupsMap[sortKey]) {
      groupsMap[sortKey] = [];
    }

    groupsMap[sortKey].push(item);
  });

  return groupsMap;
}
