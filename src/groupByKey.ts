type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const valKey = String(item[key]);

    if (!groupObj[valKey]) {
      groupObj[valKey] = [];
    }

    groupObj[valKey].push(item);
  });

  return groupObj;
}
