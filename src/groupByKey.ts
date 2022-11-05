type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const condition: R[keyof R][] = items.map((item: R) => item[key]);

  const groups: GroupsMap<R> = {};

  condition.forEach((el: R[keyof R]) => {
    groups[el as string] = items.filter((item: R) => item[key] === el);
  });

  return groups;
}
