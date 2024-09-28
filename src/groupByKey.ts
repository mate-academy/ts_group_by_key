type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups = {};
  const allKeys = items.map((item) => item[key]);

  allKeys.map((keyType) => {
    groups[keyType as keyof GroupsMap<T>] = items
      .filter((item) => item[key] === keyType);

    return keyType;
  });

  return groups;
}
