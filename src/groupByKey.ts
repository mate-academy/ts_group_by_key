type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const keyValue = item[key] as string;

    return {
      ...result,
      [keyValue]: (result[keyValue] || []).concat(item),
    };
  }, {});
}
