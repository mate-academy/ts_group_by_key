type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  const groupsOfItem: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = `${item[key]}`;

    if (!groupsOfItem[keyValue]) {
      groupsOfItem[keyValue] = [];
    }
    groupsOfItem[keyValue].push(item);
  });

  return groupsOfItem;
}
