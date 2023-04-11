type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item) => {
    const keyValue = String(item[key]);

    return {
      ...result,
      [keyValue]: [...(result[keyValue] || []), item],
    };
  }, {});
}
