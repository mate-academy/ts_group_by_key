type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const filteredByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const filter: string = String(item[key]);

    if (!filteredByKey[filter]) {
      filteredByKey[filter] = [];
    }

    filteredByKey[filter].push(item);
  });

  return filteredByKey;
}
