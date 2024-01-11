type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (itemKey in groupedItems) {
      groupedItems[itemKey].push(item);
    } else {
      groupedItems[itemKey] = [item];
    }
  });

  return groupedItems;
}

// const books = [
//   { id: 1, color: 'red', country: 'Ukraine' },
//   { id: 1, color: 'red', country: 'Italy' },
//   { id: 1, color: 'green', country: 'Ukraine' },
// ;

// groupByKey(books, 'color') === {
//   'red': [
//     { id: 1, color: 'red', country: 'Ukraine' },
//     { id: 1, color: 'red', country: 'Italy' },
//   ],
//   'green': [
//     { id: 1, color: 'green', country: 'Ukraine' },
//   ],
// }

// groupByKey(books, 'country') === {
//   'Ukraine': [
//     { id: 1, color: 'red', country: 'Ukraine' },
//     { id: 1, color: 'green', country: 'Ukraine' },
//   ],
//   'Italy': [
//     { id: 1, color: 'red', country: 'Italy' },
//   ],
// }
