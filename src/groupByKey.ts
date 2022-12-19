type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortBy = `${item[key]}`;

    if (!grouped[sortBy]) {
      grouped[sortBy] = [];
    }

    grouped[sortBy].push(item);
  });

  return grouped;
}
