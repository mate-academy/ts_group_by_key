type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((result, item) => {
    if (!(key in item)) {
      throw new Error(`Key "${String(key)}" does not exist on item.`);
    }

    const keyValue = item[key];
    const keyString = String(keyValue);

    if (!(keyString in result)) {
      result[keyString] = [];
    }
    result[keyString].push(item);

    return result;
  }, {});
}
