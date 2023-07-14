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
  return items.reduce((acc: GroupsMap<T>, object: ObjectForSorting) => {
    const keyValue = object[key];
    const finalGroup = acc;

    if (finalGroup[keyValue]) {
      finalGroup[keyValue].push(object as T);
    } else {
      finalGroup[keyValue] = [object as T];
    }

    return finalGroup;
  }, {});
}
