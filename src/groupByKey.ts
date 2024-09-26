type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((el) => {
    const prop = String(el[key]);

    if (!grouped[prop]) {
      grouped[prop] = [];
    }

    grouped[prop].push(el);
  });

  return grouped;
}
