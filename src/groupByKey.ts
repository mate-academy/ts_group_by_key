type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K>(items:K[], key: keyof K): GroupsMap<K> {
  const result: GroupsMap<K> = {};

  items.forEach((item) => {
    const keyOfItem = `${item[key]}`;

    if (keyOfItem in result) {
      result[keyOfItem].push(item);
    } else {
      result[keyOfItem] = [item];
    }
  });

  return result;
}
