type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: any = {};

  for (const i of items) {
    if (typeof result[`${i[key]}`] !== 'undefined') {
      result[i[key]].push(i);
    } else {
      result[i[key]] = [];
      result[i[key]].push(i);
    }
  }

  return result;
}
