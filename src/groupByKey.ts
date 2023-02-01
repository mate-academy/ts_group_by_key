type GroupsMap<T> = {
  [keyName: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): object {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((itemsElement: T) => {
    const seriesName: string = String(itemsElement[key]);

    if (result.hasOwnProperty(seriesName)) {
      result[seriesName].push(itemsElement);
    } else {
      const temporaryObject = { [seriesName]: [itemsElement] };

      Object.assign(result, temporaryObject);
    }
  });

  return result;
}
