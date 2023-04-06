type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const value = String(item[key]);
    const groupsCopy = { ...groups };

    if (!groupsCopy[value]) {
      groupsCopy[value] = [];
    }

    groupsCopy[value].push(item);

    return groupsCopy;
  }, {} as GroupsMap<T>);
}
