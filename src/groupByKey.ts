type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((element) => {
    const sortValue = String(element[key]);

    if (!sorted[sortValue]) {
      sorted[sortValue] = [];
    }

    sorted[sortValue].push(element);
  });

  return sorted;
}
