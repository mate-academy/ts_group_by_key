type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(
  items: R[],
  key: keyof R,
): GroupsMap<R> {
  const groups: GroupsMap<R> = {};

  items.forEach((item: R) => {
    const value = String(item[key]);

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);
  });

  return groups;
}
