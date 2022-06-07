type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedArrays: GroupsMap<T> = {};

  items.forEach((item) => {
    const property = String(item[key]);

    if (!groupedArrays[property]) {
      groupedArrays[property] = [];
    }

    groupedArrays[property].push(item);
  });

  return groupedArrays;
}
