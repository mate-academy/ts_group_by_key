type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const grouped: GroupsMap<T> = {} as GroupsMap<T>;

  for (const el of items) {
    if (!grouped.hasOwnProperty(el[key] as string)) {
      grouped[el[key] as string] = [];
    }
    grouped[el[key] as string].push(el);
  }

  return grouped;
}
