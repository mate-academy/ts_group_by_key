type GroupsMap<T> = {
  [key: string]: T[];
};

type ObjectForSorting = {
  [key: string]: string | number;
};

export function groupByKey<T>(
  items: ObjectForSorting[],
  key: string,
): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((object: ObjectForSorting) => {
    const keyValue = object[key];

    if (group[keyValue]) {
      group[keyValue].push(object as T);
    } else {
      group[keyValue] = [object as T];
    }
  });

  return group;
}
