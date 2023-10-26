type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Object>(items: T[],
  key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  const groupNames: Set<string>
    = new Set([...(items.map((obj: T) => String(obj[key])))]);

  groupNames.forEach((group: string) => {
    groups[group] = items.filter((item: T) => String(item[key]) === group);
  });

  return groups;
}
