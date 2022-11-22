type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const groped:GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const item = String(items[i][key]);

    if (item in groped) {
      groped[item].push(items[i]);
    } else {
      groped[item] = [items[i]];
    }
  }

  return groped;
}
