type GroupsMap<T> = {
  [key: string | number]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKeyValue = item[key] as string;

    if (!Object.prototype.hasOwnProperty.call(groupedByKey, itemKeyValue)) {
      groupedByKey[itemKeyValue] = [];
    }

    groupedByKey[itemKeyValue].push(item);
  });

  return groupedByKey;
}
