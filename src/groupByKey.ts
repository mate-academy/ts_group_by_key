type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: any): GroupsMap<typeof items> {
  const result: GroupsMap<typeof items> = {};

  for (const item of items) {
    type ItemType = typeof item;

    const indexedKey = key as keyof ItemType;
    const indexedItem = item as keyof ItemType;

    if (!result.hasOwnProperty(item[indexedKey])) {
      result[item[indexedKey]] = [indexedItem];
    } else {
      result[item[indexedKey]].push(indexedItem);
    }
  }

  return result;
}
