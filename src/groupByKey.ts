type T = { [key: string]: string };

type GroupsMap = {
  [key: string]: T[];
};

export function groupByKey(items: T[], key: keyof T): GroupsMap {
  return items.reduce((grouped: GroupsMap, item: T) => {
    const result = grouped;
    const keyValue = item[key];

    if (!grouped[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);

    return result;
  }, {});
}
