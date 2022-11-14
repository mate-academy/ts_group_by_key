type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedObjectsByKey: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const keyName = items[i][key] as string;

    if (!groupedObjectsByKey[keyName]) {
      groupedObjectsByKey[keyName] = [];
    }

    groupedObjectsByKey[keyName].push(items[i]);
  }

  return groupedObjectsByKey;
}
