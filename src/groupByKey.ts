type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped: GroupsMap<T>, item): GroupsMap<T> => {
    const groupedCopy = { ...grouped };
    const itemKeyValue = item[key] as string;

    if (!Object.prototype.hasOwnProperty.call(groupedCopy, itemKeyValue)) {
      groupedCopy[itemKeyValue] = [];
    }

    groupedCopy[itemKeyValue].push(item);

    return groupedCopy;
  }, {});
}
