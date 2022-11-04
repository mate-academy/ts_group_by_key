type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const objectResult = {};

  const keysArray: string[] = items.map((obj) => obj[key]);
  const keysArrayUnique: string[]
  = keysArray.filter((item, index, arr) => arr.indexOf(item) === index);

  function createObject(prop: string): void {
    objectResult[prop] = items.filter((obj) => obj[key] === prop);
  }

  keysArrayUnique.forEach(createObject);

  return objectResult;
}
