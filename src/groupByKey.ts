type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, item) => {
    const groupKey = item[key] as string;

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {} as GroupsMap<T>);
}

const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
];

groupByKey(books, 'color') === {
  'red': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'red', country: 'Italy' },
  ],
  'green': [
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
}

