type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap <T> {
  const res: GroupsMap<T> = {};

  items.forEach((e: T) => {
    const elemKey = `${e[key]}`;

    if (!res[elemKey]) {
      res[elemKey] = [e];
    } else {
      res[elemKey].push(e);
    }
  });

  return res;
}
