type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupsMap: GroupsMap<T>, item: T) => {
    const groupField = String(item[key]);
    const groupObjectCopy: GroupsMap<T> = { ...groupsMap };

    if (!{}.hasOwnProperty.call(groupObjectCopy, groupField)) {
      groupObjectCopy[groupField] = [];
    }

    groupObjectCopy[groupField].push(item);

    return groupObjectCopy;
  }, {});
}
