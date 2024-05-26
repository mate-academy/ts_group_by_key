type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(array: T[], key: keyof T): GroupsMap<T> {
  return array.reduce((result: GroupsMap<T>, item: T) => {
    (result[item[key] as string] = result[item[key] as string] || []).push(
      item,
    );

    return result;
  }, {} as GroupsMap<T>);
}
