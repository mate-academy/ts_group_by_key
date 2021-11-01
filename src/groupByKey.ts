type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const output: GroupsMap<T> = {};

  items.forEach((el): void => {
    const valueOfKey: string = String(el[key]);

    if (valueOfKey in output) {
      output[valueOfKey].push(el);
    } else {
      output[valueOfKey] = [el];
    }
  });

  return output;
}
