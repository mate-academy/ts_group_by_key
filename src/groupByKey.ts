type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupObj[value]) {
      groupObj[value] = [];
    }

    groupObj[value].push(item);
  });

  return groupObj;
}
