type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  const sortedField = items.map((a: T) => a[key]);

  const groupsSortedField: typeof sortedField = [];

  for (let i: number = 0; i < sortedField.length; i += 1) {
    if (!groupsSortedField.includes(sortedField[i])) {
      groupsSortedField.push(sortedField[i]);
    }
  }

  for (let i: number = 0; i < groupsSortedField.length; i += 1) {
    // eslint-disable-next-line
    const field = '' + groupsSortedField[i];

    groups[field] = items
      .filter((a: T) => a[key] === groupsSortedField[i]);
  }

  return groups;
}
