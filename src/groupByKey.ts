type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce(
    (groups, item) => {
      const raw = item[key];

      if (raw === null || raw === undefined) {
        return groups;
      }

      const k = String(raw);

      groups[k] = groups[k] ?? [];
      groups[k].push(item);

      return groups;
    },
    {} as Record<string, T[]>,
  );
}
