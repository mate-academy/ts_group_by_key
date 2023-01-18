type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped : GroupsMap<T> = {};

  items.forEach((person:T): void => {
    const value = String(person[key]);

    if (value in grouped) {
      grouped[value].push(person);
    } else {
      grouped[value] = [person];
    }
  });

  return grouped;
}
