type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> {
  const gropedObject: GroupsMap<T> = {};
  let gropedKey: any = '';

  items.forEach((obj: T) => {
    gropedKey = obj[key];

    if (!(gropedKey in gropedObject)) {
      const gropedArray
        = items.filter((item) => item[key] === gropedKey);

      gropedObject[gropedKey] = gropedArray;
    }
  });

  return gropedObject;
}
