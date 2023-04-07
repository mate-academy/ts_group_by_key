type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item) => {
    const value = item[key];
    const group = groups[String(value)] || [];

    return {
      ...groups,
      [String(value)]: [...group, item],
    };
  }, {});
}
