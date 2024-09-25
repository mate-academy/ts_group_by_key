type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupKey = item[key];

    if (typeof groupKey !== 'string' && typeof groupKey !== 'number') {
      throw new Error(
        `Key "${String(key)}" must refer to a string or number property.`,
      );
    }

    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);

    return groups;
  }, {} as GroupsMap<T>);
}
