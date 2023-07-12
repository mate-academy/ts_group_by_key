type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item) => {
    const value = item[key] as string;

    const group = result[value] || [];

    return {
      ...result,
      [value]: [...group, item],
    };
  }, {});
}
