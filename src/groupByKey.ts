type Group<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): Group<T> {
  const group: Group<T> = {};

  items.forEach((elem) => {
    const keyValue: string = String(elem[key]);

    if (keyValue in group) {
      group[keyValue].push(elem);
    } else {
      group[keyValue] = [elem];
    }
  });

  return group;
}
