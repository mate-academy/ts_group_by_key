type GroupsMap<Group> = {
  [key: string]: Group[];
};

export function groupByKey<Group>(
  items: Group[],
  key: keyof Group,
): GroupsMap<Group> {
  const grouppedItems: GroupsMap<Group> = items.reduce((res, cur) => {
    const itemKey = cur[key] as string;

    if (res[itemKey]) {
      res[itemKey] = [...res[itemKey], cur];
    } else {
      res[itemKey] = [cur];
    }

    return res;
  }, {} as GroupsMap<Group>);

  return grouppedItems;
}
