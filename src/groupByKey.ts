type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const n of items) {
    const nKey = String(n[key]);

    if (result[nKey]) {
      result[nKey].push(n);
    } else {
      result[nKey] = [n];
    }
  }

  return result;
}
