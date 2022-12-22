type GroupsMap<T> = {
  [key: string]: T[];
};

interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  return items.reduce((acc, element) => {
    if (element[key] in acc) {
      acc[element[key]].push(element);
    } else {
      acc[element[key]] = [element];
    }

    return acc;
  }, {} as GroupsMap<Item>);
}
