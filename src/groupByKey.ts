type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groupObject, item) => {
    const groupObjectClone: GroupsMap<T> = { ...groupObject };
    const valueToKey = String(item[key]);

    if (!groupObjectClone[valueToKey]) {
      groupObjectClone[valueToKey] = [];
    }

    groupObjectClone[valueToKey].push(item);

    return groupObjectClone;
  }, {});
}
