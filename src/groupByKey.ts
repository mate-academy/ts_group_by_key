export function groupByKey<T extends { [key: string]: any }>(
  arr: T[], key: keyof T,
): { [key: string]: T} {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || []).concat(obj);

    return acc;
  }, {});
}
