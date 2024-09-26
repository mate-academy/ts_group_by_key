type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Array>(
  items: Array[], key: keyof Array,
): GroupsMap<Array> {
  const obj: GroupsMap<Array> = {};

  items.forEach((el: Array) => {
    const keyValue: string = `${el[key]}`;

    if (keyValue in obj) {
      obj[keyValue].push(el);
    } else {
      obj[keyValue] = [el];
    }
  });

  return obj;
}
