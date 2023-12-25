type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((el) => {
    const sortBy = el[key] as keyof GroupsMap<T>;

    if (!res[sortBy]) {
      res[sortBy] = [el];
    } else {
      res[sortBy] = [...res[sortBy], el];
    }
  });

  return res;
}
