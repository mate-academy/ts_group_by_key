
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const mas: GroupsMap<T> = {};

  items.forEach((el) => {
    const itemKey = `${el[key]}`;

    if (!mas[itemKey]) {
      mas[itemKey] = [];
    }

    mas[itemKey].push(el);
  });

  return mas;
}
