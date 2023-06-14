type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const value = String(item[key]);
    const updatedResult = { ...result };

    if (!updatedResult[value]) {
      updatedResult[value] = [];
    }

    updatedResult[value].push(item);

    return updatedResult;
  }, {});
}
