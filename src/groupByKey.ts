type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const resGroup: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyG: string = item[key as keyof object];

    if (resGroup[keyG]) {
      resGroup[keyG].push(item);
    } else {
      resGroup[keyG] = [item];
    }
  });

  return resGroup;
}
