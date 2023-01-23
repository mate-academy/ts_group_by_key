type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((prev, user: T) => ({
    ...prev,
    [`${user[key]}`]: items.filter((val: T) => val[key] === user[key]),
  }), {});
}
