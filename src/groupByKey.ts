type GroupsMap = {
  [key: string]: [];
};

export function groupByKey(items: GroupsMap[], key: keyof GroupsMap): object {
  const groups = {};

  for (let i = 0; i < items.length; i += 1) {
    const option = items[i][key];

    groups[option] = items
      .filter((currentOption: GroupsMap) => currentOption[key] === option);
  }

  return groups;
}
