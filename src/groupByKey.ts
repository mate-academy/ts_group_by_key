type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap = {} as GroupsMap<T>;

  items.forEach((element) => {
    const elementKey = String(element[key]);

    if (!groupsMap[elementKey]) {
      groupsMap[elementKey] = [];
    }

    groupsMap[elementKey].push(element);
  });

  return groupsMap;
}
