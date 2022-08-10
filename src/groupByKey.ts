type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result: GroupsMap<{[key: string]: object[];}> = {};

  items.forEach((el:{[key: string]: any;}) => {
    if (Object.prototype.hasOwnProperty.call(result, el[key])) {
      result[el[key]].push(el);
    } else {
      result[el[key]] = [el];
    }
  });

  return result;
}
