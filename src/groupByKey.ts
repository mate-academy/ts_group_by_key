type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;

  const result: GroupsMap<T> = {};

  for (const k of items) {
    const oneKey: any = k[key];

    if (!result[oneKey]) {
      result[oneKey] = [k];
    } else {
      result[oneKey].push(k);
    }
  }

  return result;
}
