type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedData: GroupsMap<T>, item: T) => {
    const itemKey = item[key] as string;
    const updatedData = { ...groupedData };

    updatedData[itemKey] = (updatedData[itemKey] || []).concat(item);

    return updatedData;
  }, {});
}
