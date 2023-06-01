type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const itemKey = item[key] as string;
    const updatedGroups = { ...groups };

    if (updatedGroups[itemKey]) {
      updatedGroups[itemKey].push(item);
    } else {
      updatedGroups[itemKey] = [item];
    }

    return updatedGroups;
  }, {});
}
