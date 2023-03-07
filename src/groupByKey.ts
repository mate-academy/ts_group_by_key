type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  return items.reduce((map:GroupsMap<T>, item: T) => {
    const groupField = item[key] as string;
    const groupObjectCopy: GroupsMap<T> = { ...map };

    if (Object.prototype.hasOwnProperty.call(groupObjectCopy, groupField)) {
      groupObjectCopy[groupField].push(item);
    } else {
      groupObjectCopy[groupField] = [item];
    }

    return groupObjectCopy;
  }, {});
}
