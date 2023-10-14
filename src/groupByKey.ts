type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[], key: K,
): GroupsMap<T> {
  return items.reduce((grouped, item) => {
    const keyValue = item[key] as string;

    return {
      ...grouped,
      [keyValue]: (grouped[keyValue] || []).concat(item),
    };
  }, {} as GroupsMap<T>);
}
