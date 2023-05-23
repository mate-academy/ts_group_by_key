type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group = {} as GroupsMap<T>;

  items.forEach((element) => {
    const value: string = String(element[key]);

    if (!group[value]) {
      group[value] = [];
    }

    group[value].push(element);
  });

  return group;
}
