type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((element) => {
    const currentCategory = element[key] as string;

    if (!group[currentCategory]) {
      group[currentCategory] = [];
    }

    group[currentCategory].push(element);
  });

  return group;
}
