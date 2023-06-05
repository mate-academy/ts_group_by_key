type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groped: GroupsMap<T> = {};

  items.forEach((objOfArr) => {
    const sortByThisKey = String(objOfArr[key]);

    if (!groped[sortByThisKey]) {
      groped[sortByThisKey] = [];
    }
    groped[sortByThisKey].push(objOfArr);
  });

  return groped;
}
