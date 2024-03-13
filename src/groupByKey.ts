type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const currentValue = item[key];

    if (!result[currentValue]) {
      return {
        ...result,
        [currentValue]: [item],
      };
    }

    return {
      ...result,
      [currentValue]: [...result[currentValue], item],
    };
  }, {});
}
