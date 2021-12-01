type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted = {};

  items.forEach((el) => {
    const sortBy = String(el[key]);

    if (!sorted[sortBy]) {
      sorted[sortBy] = [];
    }

    sorted[sortBy].push(el);
  });

  return sorted;
}
