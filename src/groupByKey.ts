type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groups, item: T) => {
    const keyValue = item[key] as string;

    return {
      ...groups,
      [keyValue]: groups[keyValue] ? [...groups[keyValue], item] : [item],
    };
  }, {});
}
