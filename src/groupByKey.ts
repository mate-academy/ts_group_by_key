type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  const groupsMaps: GroupsMap<T> = {};

  items.forEach((element) => {
    const newKey = `${element[key]}`;

    if (newKey in groupsMaps) {
      groupsMaps[newKey].push(element);
    } else {
      groupsMaps[newKey] = [element];
    }
  });

  return groupsMaps;
}
