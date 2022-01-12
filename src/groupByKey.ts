type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<E>(
  items: E[],
  key: keyof E,
): GroupsMap<E> {
  const shelves: GroupsMap<E> = {};

  items.forEach((item: E) => {
    const index = `${item[key]}`;

    shelves[index] = items.filter(
      (el): boolean => el[key] === item[key],
    );
  });

  return shelves;
}
