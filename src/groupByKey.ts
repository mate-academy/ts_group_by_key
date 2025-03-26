type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const initialValue: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = `${item[key]}`;

    if (!initialValue[keyValue]) {
      initialValue[keyValue] = [];
    }

    initialValue[keyValue].push(item);
  });

  return initialValue;
}
