type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const filteredByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const filter: string = item[key as keyof object];

    if (!filteredByKey[filter]) {
      filteredByKey[filter] = [];
    }

    filteredByKey[filter].push(item);
  });

  return filteredByKey;
}
