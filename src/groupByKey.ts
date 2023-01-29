export function groupByKey<T>(items: T[], key: keyof T): object {
  // write code here;
  const result: any = {};

  items.forEach((a: T) => {
    const variable: any = a[key];

    if (Object.keys(result).includes(String(variable))) {
      result[variable].push(a);
    } else {
      const temporaryObject = { [variable]: [a] };

      Object.assign(result, temporaryObject);
    }
  });

  return result;
}
