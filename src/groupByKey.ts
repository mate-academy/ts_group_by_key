type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsResult: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (!groupsResult[newKey]) {
      groupsResult[newKey] = [];
    }
    groupsResult[newKey].push(item);
  });

  return groupsResult;
}
