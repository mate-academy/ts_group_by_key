type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    const updatedGroups = { ...groups };

    if (!updatedGroups[groupKey]) {
      updatedGroups[groupKey] = [];
    }

    updatedGroups[groupKey].push(item);

    return updatedGroups;
  }, {});
}
