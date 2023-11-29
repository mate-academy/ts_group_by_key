type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped: GroupsMap<T>, item: T) => {
    const keyV = item[key] as string;

    return {
      ...grouped,
      [keyV]: [...(grouped[keyV] || []), item],
    };
  }, {});
}
