type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const objectKey = `${item[key]}`;

    if (result[objectKey]) {
      result[objectKey].push(item);
    } else {
      result[objectKey] = [item];
    }
  });

  return result;
}
