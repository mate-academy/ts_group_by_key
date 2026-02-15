const books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' },
;
// Group books by color
groupByKey(books, 'color') === {
  'red': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'red', country: 'Italy' },
  ],
  'green': [
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
}
// group books by country
groupByKey(books, 'country') === {
  'Ukraine': [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'green', country: 'Ukraine' },
  ],
  'Italy': [
    { id: 1, color: 'red', country: 'Italy' },
  ],
}
