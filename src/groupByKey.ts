type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  return items.reduce((grouped: GroupsMap<T>, item: T) => {
    const itemKey = item[key] as unknown as string;

    return {
      ...grouped,
      [itemKey]: grouped[itemKey] ? [...grouped[itemKey], item] : [item],
    };
  }, {});
}
