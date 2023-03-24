type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<object>,
  key: string,
): GroupsMap<object> {
  const gropedObject: GroupsMap<object> = {};
  let gropedKey: string = '';

  items.forEach((obj: object) => {
    gropedKey = (obj[key as keyof typeof obj]);

    if (!(gropedKey in gropedObject)) {
      const gropedArray: Array<object>
        = items.filter((item) => item[key as keyof typeof item] === gropedKey);

      gropedObject[gropedKey] = gropedArray;
    }
  });

  return gropedObject;
}
