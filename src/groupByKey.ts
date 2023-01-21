type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const itemsGrouped: GroupsMap<T> = {};

  return items.reduce((prev, user: T) => {
    const userKey = String(user[key]);

    return ({
      ...prev,
      [userKey]: items.filter((val: T) => String(val[key]) === userKey),
    });
  }, itemsGrouped);
}
