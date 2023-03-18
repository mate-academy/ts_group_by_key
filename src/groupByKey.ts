type GroupsMap<T> = {[key: string]: T[]};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, currObject) => {
    const value = String(currObject[key]);

    (acc[value] = acc[value] || []).push(currObject);

    return acc;
  }, {});
}
