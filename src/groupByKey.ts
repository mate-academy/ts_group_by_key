type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const callback = (groups: GroupsMap<T>, item: T): GroupsMap<T> => {
    const groupsCopy = { ...groups };

    const value = String(item[key]);

    if (!groupsCopy[value]) {
      groupsCopy[value] = [];
    }

    groupsCopy[value].push(item);

    return groupsCopy;
  };

  return items.reduce(callback, {});
}
