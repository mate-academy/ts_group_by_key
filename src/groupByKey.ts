type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T & string,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const value = item[key] as string;
    const newResult = { ...result };

    newResult[value] = [...(newResult[value] || []), { ...item }];

    return newResult;
  }, {});
}
