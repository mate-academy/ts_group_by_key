type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[]
  , key: K): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const itemKey = item[key];

    if (itemKey !== null && itemKey !== undefined) {
      const updatedGroups = { ...groups };

      updatedGroups[String(itemKey)] = updatedGroups[String(itemKey)] || [];
      updatedGroups[String(itemKey)].push(item);

      return updatedGroups;
    }

    return groups;
  }, {});
}
