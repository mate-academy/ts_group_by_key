type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, unknown>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = String(item[key]);

    return {
      ...result,
      [keyValue]: [...(result[keyValue] || []), item],
    };
  }, {});
}
