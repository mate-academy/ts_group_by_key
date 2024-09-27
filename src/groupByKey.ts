type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends
{ [key: string]: any }>(items: T[], key: string): GroupsMap<T> {
  if (!items.length) {
    return {};
  }

  const groupedObject: GroupsMap<T> = items
    .reduce((acc: GroupsMap<T>, item: T) => {
      if (acc[item[key]]) {
        acc[item[key]].push(item);
      } else {
        acc[item[key]] = [item];
      }

      return acc;
    }, {});

  return groupedObject;
}
