type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyOfGroup: string = String(item[key]);

    if (!group[keyOfGroup]) {
      group[keyOfGroup] = [];
    }

    group[keyOfGroup].push(item);
  });

  return group;
}
