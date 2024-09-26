type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupName = String(item[key]);

    if (!acc[groupName]) {
      acc[groupName] = [];
    }

    acc[groupName].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
