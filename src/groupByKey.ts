type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedArrays: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const property = String(items[i][key]);

    if (!groupedArrays[property]) {
      groupedArrays[property] = [];
      groupedArrays[property].push(items[i]);

      for (let c = i + 1; c < items.length; c += 1) {
        if (String(items[c][key]) === property) {
          groupedArrays[property].push(items[c]);
        }
      }
    }
  }

  return groupedArrays;
}
