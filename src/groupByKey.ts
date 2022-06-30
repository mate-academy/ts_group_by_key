type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    result[String(items[i][key])] = items
      .filter((currentOption: T) => currentOption[key] === items[i][key]);
  }

  return result;
}
