type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as string;

    if (value in groupObject) {
      groupObject[value].push(item);
    } else {
      groupObject[value] = [item];
    }
  });

  return groupObject;
}
