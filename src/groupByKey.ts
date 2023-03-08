type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): object {
  return items.reduce((
    groupOfObejcts: GroupsMap<T>,
    singleObject,
  ) => {
    const groupKey = singleObject[key] as string;

    if (!Object.prototype.hasOwnProperty.call(groupOfObejcts, groupKey)) {
      Object.assign(groupOfObejcts, { [groupKey]: [] });
    }

    groupOfObejcts[groupKey].push(singleObject);

    return groupOfObejcts;
  }, {}) as object;
}
