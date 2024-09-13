type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const el = item[key];
    const keyStr = String(el);

    if (Object.prototype.hasOwnProperty.call(result, keyStr)) {
      result[keyStr].push(item);
    } else {
      result[keyStr] = [item];
    }
  }

  return result;
}
