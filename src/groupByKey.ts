interface ItemGroup {}

interface Item {
  [key: string]: ItemGroup[];
}

export function groupByKey(items: ItemGroup, field: keyof Item): ItemGroup {
  const result: Item = {};

  items.forEach((item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
    }

    result[item[field]].push(item);
  });

  return result;
}
