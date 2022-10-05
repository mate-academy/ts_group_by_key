type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // const newObj: GroupsMap<T> = {};

  const groups: GroupsMap<T> = items
    .reduce((obj: GroupsMap<T>, item: T) => {
      const group = String(item[key]);

      if (!obj[group]) {
        // eslint-disable-next-line
        obj[group] = [];
      }

      obj[group].push(item);

      return obj;
    }, {});

  return groups;
}
