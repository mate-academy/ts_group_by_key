type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<ObjectToSort, Key extends keyof ObjectToSort>(
  items: ObjectToSort[],
  key: Key,
): GroupsMap<ObjectToSort> {
  if (items.length === 0) {
    return {};
  }

  type ValueFromObject = ObjectToSort[Key];

  const valuesOfKey: Array<ValueFromObject> = items.map(
    (item: ObjectToSort) => item[key],
  );
  const uniqueValuesOfKey: Set<ValueFromObject> = new Set([...valuesOfKey]);
  const sortedObjects: GroupsMap<ObjectToSort> = {};

  uniqueValuesOfKey.forEach((uniqueValueOfKey: ValueFromObject) => {
    const relativesObjects = items.filter(
      (item: ObjectToSort) => item[key] === uniqueValueOfKey,
    );

    sortedObjects[String(uniqueValueOfKey)] = relativesObjects;
  });

  return sortedObjects;
}
