type GroupsMap<T> = {
  [key: string]: T[];
};

type K = string | number;

export function groupByKey(items: Array<{}>, key: keyof K): GroupsMap<Object> {
  const result: GroupsMap<Object> = {};

  items.forEach((element: Object) => {
    const keyStr = element[key].toString();

    if (!result[keyStr]) {
      result[keyStr] = [];
    }

    result[keyStr].push(element);

    // for (const resKey in result) {
    //   if (keyStr === resKey.toString()) {
    //     result[resKey].push(element);
    //   }
    // }
  });

  return result;
}
