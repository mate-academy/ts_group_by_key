type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const filtered: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const filter = String(el[key]);

    if (!filtered[filter]) {
      filtered[filter] = [];
    }

    filtered[filter].push(el);
  });

  return filtered;
}
