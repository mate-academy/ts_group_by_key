type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((element) => {
    const newKey: string = `${element[key]}`;

    if (!(newKey in groupsMap)) {
      groupsMap[newKey] = [element];
    } else {
      groupsMap[newKey].push(element);
    }
  });

  return groupsMap;
}
