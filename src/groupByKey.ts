type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const keyValue = String(item[key]);

    return {
      ...acc,
      [keyValue]: items.filter((el) => el[key] === item[key]),
    };
  }, {});
}
