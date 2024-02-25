type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupKey = item[key as keyof T] as unknown as string;

    const updatedGroups = { ...groups };

    if (!updatedGroups[groupKey]) {
      updatedGroups[groupKey] = [];
    }

    updatedGroups[groupKey].push(item);

    return updatedGroups;
  }, {});
}
