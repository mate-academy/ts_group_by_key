type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped: GroupsMap<T>, item: T) => {
    const keyValue = item[key] as string;

    return {
      ...grouped,
      [keyValue]: (grouped[keyValue] || []).concat(item),
    };
  }, {});
}
