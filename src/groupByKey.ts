type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((res: GroupsMap<T>, item: T) => {
    return {
      ...res,
      [String(item[key])]: items.filter((el: T) => el[key] === item[key]),
    };
  }, {} as GroupsMap<T>);
}
