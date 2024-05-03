type GroupsMap<T> = {
  [key: string]: T[];
};

interface ObjType {
  [key: string]: string | number;
}

export function groupByKey(items: ObjType[], key: string): GroupsMap<ObjType> {
  const result: { [index: string]: ObjType[] } = {};

  items.forEach((elem: ObjType) => {
    const elemValue: string | number = elem[key];

    const arrayOfFilteredObjects = items.filter((obj: ObjType) => {
      const objValue: string | number = obj[key];

      return objValue === elemValue;
    });

    const keyOfResult: string | number = elem[key];

    result[keyOfResult] = arrayOfFilteredObjects;
  });

  return result;
}
