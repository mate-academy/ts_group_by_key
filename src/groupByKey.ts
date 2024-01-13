type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const sortedObjects: { [key: string]: R[] } = {};

  items.forEach((obj: R) => {
    const keyInObj = obj[key] as string;

    if ((keyInObj) in sortedObjects) {
      sortedObjects[keyInObj].push(obj);
    } else {
      sortedObjects[keyInObj] = [obj];
    }
  });

  return sortedObjects;
}
