type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((element) => {
    const elementValue = String(element[key]);

    if (!(elementValue in groups)) {
      groups[elementValue] = [];
    }

    groups[elementValue].push(element);
  });

  return groups;
}
