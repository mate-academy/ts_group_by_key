type GroupsMap<T> = {
  [key: string]: T[];
};

const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 2, color: 'red', country: 'Italy' },
  { id: 3, color: 'green', country: 'Ukraine' },
];

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupKey = item[key] as string; // Перетворюємо ключ до рядка

    if (!groups[groupKey]) {
      groups[groupKey] = []; // Ініціалізуємо масив, якщо його ще немає
    }

    groups[groupKey].push(item);

    return groups;
  }, {});
}

groupByKey(books, 'color');
