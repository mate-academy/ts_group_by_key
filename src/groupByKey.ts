type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const sortedObjects: { [key: string]: R[] } = {};

  items.forEach((obj: R) => {
    if ((obj[key] as string) in sortedObjects) {
      sortedObjects[obj[key] as string].push(obj);
    } else {
      sortedObjects[obj[key] as string] = [obj];
    }
  });

  return sortedObjects;
}
