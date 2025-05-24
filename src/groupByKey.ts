type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((colections: GroupsMap<T>, item: T) => {
    const keyLocal = String(item[key]);

    if (!colections[keyLocal]) {
      colections[keyLocal] = [];
    }

    colections[keyLocal] = [...colections[keyLocal], item];

    return colections;
  }, {});
}
