type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const keyValue = item[key];

    if (!result[keyValue]) {
      return {
        ...result,
        [keyValue]: [item],
      };
    }

    return {
      ...result,
      [keyValue]: [...result[keyValue], item],
    };
  }, {});
}
