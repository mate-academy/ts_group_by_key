type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const currentRes: GroupsMap<T> = { ...result };
    const newKey = String(item[key]);

    if (!currentRes[newKey]) {
      currentRes[newKey] = [];
    }

    currentRes[newKey].push(item);

    return currentRes;
  }, {});
}
