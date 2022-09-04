type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyItem = String(item[key]);

    if (!groupedByKey[keyItem]) {
      groupedByKey[keyItem] = [];
    }

    groupedByKey[keyItem].push(item);
  });

  return groupedByKey;
}
