type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resObjeect: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey = `${item[key]}`;

    if (resObjeect[itemKey]) {
      resObjeect[itemKey].push(item);
    } else {
      resObjeect[itemKey] = [item];
    }
  });

  return resObjeect;
}
