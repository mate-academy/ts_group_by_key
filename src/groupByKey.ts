type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const final: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = `${item[key]}`;

    if (!final[keyValue]) {
      final[keyValue] = [];
    }

    final[keyValue].push(item);
  });

  return final;
}
