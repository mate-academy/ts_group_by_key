type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const groups: GroupsMap<R> = {};

  items.forEach((item) => {
    const condition = String(item[key]);

    if (!groups[condition]) {
      groups[condition] = [];
    }

    groups[condition].push(item);
  });

  return groups;
}
