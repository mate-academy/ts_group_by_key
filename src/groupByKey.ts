type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, el) => {
    const bookKey = `${el[key]}`;

    if (!acc[bookKey]) {
      acc[bookKey] = [];
    }

    acc[bookKey].push(el);

    return acc;
  }, {});
}
