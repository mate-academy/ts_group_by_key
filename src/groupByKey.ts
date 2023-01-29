type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T>(items: T[], key: keyof T): GroupsMap<T> {
  // i know it is not good, but what type it will be?
  const result: { [key: string]: T[keyof T] } = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (typeof result[items[i][key]] === 'undefined') {
      result[items[i][key]] = [];
    }

    if (items[i][key] as unknown as 'string' in result) {
      result[items[i][key]].push(items[i]);
    }
  }

  return result;
}
