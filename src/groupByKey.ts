type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const extractedKeys: string[] = items
    .map((item) => item[key])
    .filter((item, index, self) => self.indexOf(item) === index);

  const groupedItems: GroupsMap<T> = {};

  extractedKeys.forEach((extractedKey) => {
    groupedItems[extractedKey] = items
      .filter((item) => item[key] === extractedKey);
  });

  return groupedItems;
}
