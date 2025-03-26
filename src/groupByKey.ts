type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedArreys: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfGroup = `${item[key]}`;

    if (!groupedArreys[keyOfGroup]) {
      groupedArreys[keyOfGroup] = [];
    }

    groupedArreys[keyOfGroup].push(item);
  });

  return groupedArreys;
}
