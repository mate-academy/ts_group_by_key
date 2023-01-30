export function groupByKey<T>(items: T[], key: keyof T): object {
  // write code here;
  const result: any = {};

  items.forEach((itemsElement: T) => {
    const variable: string = String(itemsElement[key]);

    if (Object.prototype.hasOwnProperty.call(result, variable)) {
      result[variable].push(itemsElement);
    } else {
      const temporaryObject = { [variable]: [itemsElement] };

      Object.assign(result, temporaryObject);
    }
  });

  return result;
}
