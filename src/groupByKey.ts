type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): object {
  const groupedObject: GroupsMap<T> = {};

  for (const elem of items) {
    const itemKeyValue: string = String(elem[key]);

    if (groupedObject.hasOwnProperty(itemKeyValue)) {
      groupedObject[itemKeyValue].push(elem);
    } else {
      groupedObject[itemKeyValue] = [elem];
    }
  }

  return groupedObject;
}
