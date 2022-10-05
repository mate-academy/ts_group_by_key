type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    if (!result[String(items[i][key])]) {
      result[String(items[i][key])] = [];
    }
    result[String(items[i][key])].push(items[i]);
  }

  return result;
}
