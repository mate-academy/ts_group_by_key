type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, thingObject) => {
    const thingValue = thingObject[key];

    if (thingValue) {
      const valueKey = String(thingValue);

      if (!result[valueKey]) {
        result[valueKey] = [thingObject];
      } else {
        result[valueKey].push(thingObject);
      }
    }

    return result;
  }, {});
}
