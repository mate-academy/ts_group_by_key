type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const result: GroupsMap<R> = {};

  for (const item of items) {
    const itemKey = `${item[key]}`;

    if (Object.prototype.hasOwnProperty.call(result, itemKey)) {
      result[itemKey].push(item);
    } else {
      result[itemKey] = [item];
    }
  }

  return result;
}
