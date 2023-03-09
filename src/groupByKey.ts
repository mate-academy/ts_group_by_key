type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((
    groupOfObejcts: GroupsMap<T>,
    singleObject,
  ) => {
    const groupOfObejctsCopy = { ...groupOfObejcts };
    const groupKey = String(singleObject[key]);

    groupOfObejctsCopy[groupKey] ??= [];

    groupOfObejctsCopy[groupKey].push(singleObject);

    return groupOfObejctsCopy;
  }, {});
}
