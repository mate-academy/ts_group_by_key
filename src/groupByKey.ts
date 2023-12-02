type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupedItems = items.reduce((result: GroupsMap<T>, item: T) => {
    if (result[item[key]]) {
      result[item[key]].push(item);

      return result;
    }

    return {
      ...result,
      [item[key]]: [item],
    };
  }, {});

  return groupedItems;
}
