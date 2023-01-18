type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((element) => {
    const filterKey = String(element[key]);

    if (!obj[filterKey]) {
      obj[filterKey] = [];
    }
    obj[filterKey].push(element);
  });

  return obj;
}
