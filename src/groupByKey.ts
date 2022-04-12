type GroupsMap<T> = {
  [key: string]: T[];
};

type MainTypesUnion = string | number;

type ItemObj = {
  [key: string]: MainTypesUnion;
};

export function groupByKey(items: ItemObj[], key: string): GroupsMap<ItemObj> {
  const allKeysArray: MainTypesUnion[] = items.map((item) => item[key]);

  const uniqKeysArray: MainTypesUnion[]
    = allKeysArray.filter((elem, index) => allKeysArray
      .indexOf(elem) === index);

  const grouppedItems: GroupsMap<ItemObj> = {};

  for (let i: number = 0; i < uniqKeysArray.length; i += 1) {
    grouppedItems[uniqKeysArray[i]]
      = items.filter((item) => item[key] === uniqKeysArray[i]);
  }

  return grouppedItems;
}
