type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((grouped, item) => {
    const keyValue = item[key] as string;
    const newGrouped = grouped;

    if (!newGrouped[keyValue]) {
      newGrouped[keyValue] = [];
    }

    newGrouped[keyValue].push(item);

    return { ...newGrouped };
  }, {} as GroupsMap<T>);
}
