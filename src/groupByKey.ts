type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const groups: GroupsMap<R> = {};

  items.forEach((item: R) => {
    const condition: R[keyof R] = item[key];

    if (!groups[condition as string]) {
      groups[condition as string] = [];
    }

    groups[condition as string].push(item);
  });

  return groups;
}
