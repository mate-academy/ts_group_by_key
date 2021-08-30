interface Item {
  [key: string]: any,
}

interface GroupedByKey {
  [key: string] : Item[],
}

export function groupByKey(
  items: Item[],
  field: keyof Item,
): GroupedByKey {
  const groupedObject: GroupedByKey = {};

  items.forEach((item: Item) => {
    if (item[field] in groupedObject) {
      groupedObject[item[field]].push(item);
    } else {
      groupedObject[item[field]] = [item];
    }
  });

  return groupedObject;
}
