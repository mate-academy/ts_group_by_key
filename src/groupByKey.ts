type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const finalObject = {};

  items.forEach((obj: R) => {
    const currentKey = String(obj[key]);

    const keyExist: boolean = currentKey in finalObject;

    if (!keyExist) {
      finalObject[currentKey] = [];
    }

    finalObject[currentKey].push(obj);
  });

  return finalObject;
}
