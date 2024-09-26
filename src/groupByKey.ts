type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems = items.reduce((result: GroupsMap<T>, item: T) => {
    const itemKey = item[key] as string;
    const updatedResult = { ...result };

    if (!updatedResult[itemKey]) {
      updatedResult[itemKey] = [];
    }

    updatedResult[itemKey].push(item);

    return updatedResult;
  }, {});

  return groupedItems;
}
