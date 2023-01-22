type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, user: T) => ({
    ...prev,
    [user[key] as string]: items.filter((val: T) => val[key] === user[key]),
  }), {} as GroupsMap<T>);
}
