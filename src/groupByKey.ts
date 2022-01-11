type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: GroupsMap<T>[], key: string): object {
  const result: object = {};
  let current;

  for (let i = 0; i < items.length; i += 1) {
    current = items[i][key];

    if (!Object.keys(result).includes(current.toString())) {
      result[current] = [];
    }

    result[current].push(items[i]);
  }

  return result;
}
