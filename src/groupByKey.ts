export function groupByKey<T extends object, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const groupKey = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(groups, groupKey)) {
      Object.defineProperty(groups, groupKey, {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    groups[groupKey].push(item);

    return groups;
  }, {});
}
