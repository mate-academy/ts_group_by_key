type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped : GroupsMap<T> = {};

  items.forEach((person:T): void => {
    const groupingValue = String(person[key]);

    if (groupingValue in grouped) {
      grouped[groupingValue].push(person);
    } else {
      grouped[groupingValue] = [person];
    }
  });

  return grouped;
}
