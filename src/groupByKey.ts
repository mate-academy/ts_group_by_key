type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Object[], key: string): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((object: any) => {
    const keyValue = object[key];

    if (group[keyValue]) {
      group[keyValue].push(object);
    } else {
      group[keyValue] = [object];
    }
  });

  return group;
}
