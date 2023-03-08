type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): object {
  return items.reduce((
    gropOfObejcts: GroupsMap<T>,
    singleObject,
  ) => {
    const groupKey = singleObject[key] as string;

    if (!Object.prototype.hasOwnProperty.call(gropOfObejcts, groupKey)) {
      Object.assign(gropOfObejcts, { [groupKey]: [] });
    }

    gropOfObejcts[groupKey].push(singleObject);

    return gropOfObejcts;
  }, {}) as object;
}
