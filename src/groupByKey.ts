type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const output: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const stringifiedValue = String(item[key]);

    if (stringifiedValue in output) {
      output[stringifiedValue].push(item);
    } else {
      output[stringifiedValue] = [];
      output[stringifiedValue].push(item);
    }
  });

  return output;
}
