type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((
    groupOfObejcts: GroupsMap<T>,
    singleObject,
  ) => {
    const groupKey = String(singleObject[key]);

    if (!Object.prototype.hasOwnProperty.call(groupOfObejcts, groupKey)) {
      Object.assign(groupOfObejcts, { [groupKey]: [] });
    }

    groupOfObejcts[groupKey].push(singleObject);

    return groupOfObejcts;
  }, {});
}
