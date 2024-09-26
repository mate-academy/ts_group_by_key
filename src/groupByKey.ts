type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupList: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (groupList[keyValue]) {
      groupList[keyValue].push(item);
    } else {
      groupList[keyValue] = [item];
    }
  });

  return groupList;
}
