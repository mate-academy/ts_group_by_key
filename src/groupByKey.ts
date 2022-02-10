type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item) => ({
    ...groups,
    [item[key]]: [...(groups[item[key]] || []), item],
  }), {});
}
