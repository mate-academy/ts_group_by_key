type GroupsMap<Group> = {
  [key: string]: Group[];
};

export function groupByKey<Group>(
  items: Group[],
  key: keyof Group,
): GroupsMap<Group> {
  const grouppedItems: GroupsMap<Group> = items.reduce(
    (result, current) => {
      const itemKey = String(current[key]);

      if (result[itemKey]) {
        result[itemKey].push(current);
      } else {
        result[itemKey] = [current];
      }

      return result;
    },
    Object.create(null) as GroupsMap<Group>,
  );

  return grouppedItems;
}
