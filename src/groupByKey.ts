type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    if (result.hasOwnProperty(item[key] as string)) {
      result[String(item[key])].push(item);
    } else {
      result[String(item[key])] = [item];
    }
  }

  return result;
}
