type GroupsMap<T> = {
  [key: string]: T[];
};

type InputMap<T> = {
  [key: string]: T;
};

export function groupByKey(
  items: InputMap<string>[], key: string,
): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item) => {
    const newKey: string = String(item[key]);

    if (Object.keys(result).includes(newKey)) {
      result[newKey].push(item);
    } else {
      result[newKey] = [item];
    }
  });

  return result;
}
