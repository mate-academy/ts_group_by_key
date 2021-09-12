
interface Item {
  [key: string]: any;
}
interface GroupFilter<T> {
  [key:string]: T[]
}

export function groupByKey(items: Item[], field: keyof Item):GroupFilter<Item> {
  const objResult: GroupFilter<Item> = {};

  items.forEach((obj) => {
    if (!Object.prototype.hasOwnProperty.call(objResult, obj[field])) {
      objResult[obj[field]] = [];
    }
    objResult[obj[field]].push(obj);
  });

  return objResult;
}
