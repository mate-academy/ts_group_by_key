type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(item: T[], key: keyof T): GroupsMap<T> {
  return item.reduce((acc: GroupsMap<T>, obj: T) => {
    const groupValue: string = String(obj[key]);

    if (!(groupValue in acc)) {
      acc[groupValue] = [];
    }

    acc[groupValue].push(obj);

    return acc;
  }, {});
}
