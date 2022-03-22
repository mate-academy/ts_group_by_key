type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const filteredArray: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const filter: string = String(item[key]);

    if (!filteredArray[filter]) {
      filteredArray[filter] = [];
    }

    filteredArray[filter].push(item);
  });

  return filteredArray;
}
