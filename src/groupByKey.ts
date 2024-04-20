type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key): GroupsMap<typeof items> {
  const result: GroupsMap<typeof items> = {};

  for (const item of items) {
    type ObjectType = typeof item;

    if (!result.hasOwnProperty(item[key as keyof ObjectType])) {
      result[item[key as keyof ObjectType]] = [item as keyof ObjectType];
    } else {
      result[item[key as keyof ObjectType]].push(item as keyof ObjectType);
    }
  }

  return result;
}
