type GroupsMap<T> = {
  [key: string]: T[],
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const currKey = String(item[key]);

    if (!newGroup[currKey]) {
      newGroup[currKey] = [];
    }

    newGroup[currKey].push(item);
  });

  return newGroup;
}
