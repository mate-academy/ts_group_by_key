type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof object,
): GroupsMap<object> {
  const shelves: GroupsMap<object> = {};

  items.forEach((item: object) => {
    shelves[item[key]] = items.filter(
      (el): boolean => el[key] === item[key],
    );
  });

  return shelves;
}
