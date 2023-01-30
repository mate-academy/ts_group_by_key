type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: { [key: string]: T[keyof T] } = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const groupKey = items[i][key] as string;

    if (!result[items[i][key]]) {
      result[items[i][key]] = [];
    }

    if (groupKey in result) {
      result[items[i][key]].push(items[i]);
    }
  }

  return result;
}
