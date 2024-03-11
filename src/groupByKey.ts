type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const groupKey = item[key] as string;

    return {
      ...result,
      [groupKey]: [...(result[groupKey] || []), item],
    };
  }, {});
}
