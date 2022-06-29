type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof object,
): GroupsMap<object> {
  const groups: GroupsMap<object> = {};

  items.forEach((object) => {
    const value = object[key];

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(object);
  });

  return groups;
}
