interface Item {
  [key: string]: any;
}

interface ItemGroup {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): ItemGroup {
  const group: ItemGroup = {};

  items.forEach((item) => {
    if (!group[item[field]]) {
      group[item[field]] = [];
    }

    group[item[field]].push(item);
  });

  return group;
}
