type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupsCopy = groups;
    const value = item[key] as string;

    if (!groupsCopy[value]) {
      groupsCopy[value] = [];
    }

    groupsCopy[value].push(item);

    return groupsCopy;
  }, {});
}
