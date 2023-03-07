type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((person) => {
    const sortByKey = String(person[key]);

    if (!Object.prototype.hasOwnProperty.call(sorted, sortByKey)) {
      sorted[sortByKey] = [];
    }

    sorted[sortByKey].push(person);
  });

  return sorted;
}
