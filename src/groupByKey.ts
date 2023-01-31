type GroupsMap<T> = {
  [keyName: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): object {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((itemsElement: T) => {
    const variable: string = String(itemsElement[key]);

    if (result.hasOwnProperty(variable)) {
      result[variable].push(itemsElement);
    } else {
      const temporaryObject = { [variable]: [itemsElement] };

      Object.assign(result, temporaryObject);
    }
  });

  return result;
}
