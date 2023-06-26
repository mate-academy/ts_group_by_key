type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((obj: GroupsMap<T>, item) => {
    const keyValue = String(item[key]);

    return {
      ...obj,
      [keyValue]: [...(obj[keyValue] || []), item],
    };
  }, {});
}
