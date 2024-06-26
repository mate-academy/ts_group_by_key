type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<string> {
  const result: GroupsMap<string> = {};

  for (const item of items) {
    const keyResult = item[key];

    if (!result[keyResult]) {
      result[keyResult] = [];
    }
    result[keyResult].push(item);
  }

  return result;
}
