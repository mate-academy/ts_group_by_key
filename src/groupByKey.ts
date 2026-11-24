type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const groupName = String(item[key]);

    if (!Object.hasOwn(groups, groupName)) {
      groups[groupName] = [];
    }
    groups[groupName].push(item);
  }

  return groups;
}
