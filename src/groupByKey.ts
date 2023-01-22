type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const sortingKey: string = item[key];

    grouped[sortingKey]
      = items.filter((element: T) => element[key] === sortingKey);
  });

  return grouped;
}
