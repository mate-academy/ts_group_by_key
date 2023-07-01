type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<{}> {
  const result: GroupsMap<{}> = {};

  for (let i = 0; i < items.length; i += 1) {
    const arraySortedByKey = items.filter((obj) => obj[key] === items[i][key]);

    result[items[i][key]] = arraySortedByKey;
  }

  return result;
}
