type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K>(items: Array<K>, key: keyof K): GroupsMap<K> {
  const grouper = {};

  items.forEach((item) => {
    const keyOfItem: string = item[key].toString();

    if (keyOfItem in grouper) {
      grouper[keyOfItem].push(item);

      return;
    }
    grouper[keyOfItem] = [item];
  });

  return grouper;
}
