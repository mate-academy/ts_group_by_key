type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T, K extends keyof T>(items: T[], key: K): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const keyValue = String(item[key]);
    const group = result[keyValue] || [];

    return {
      ...result,
      [keyValue]: [...group, item],
    };
  }, {} as GroupsMap<T>);
}

const books = [
  {
    author: 'Yasunari Kawabata',
    country: 'Japan',
    imageLink: 'images/the-sound-of-the-mountain.jpg',
    language: 'Japanese',
    pages: 288,
    title: 'The Sound of the Mountain',
    year: 1954,
  },
  {
    author: 'Nikos Kazantzakis',
    country: 'Greece',
    imageLink: 'images/zorba-the-greek.jpg',
    language: 'Greek',
    pages: 368,
    title: 'Zorba the Greek',
    year: 1946,
  },
  {
    author: 'D. H. Lawrence',
    country: 'United Kingdom',
    imageLink: 'images/sons-and-lovers.jpg',
    language: 'English',
    pages: 432,
    title: 'Sons and Lovers',
    year: 1913,
  },
  {
    author: 'Halld\u00f3r Laxness',
    country: 'Iceland',
    imageLink: 'images/independent-people.jpg',
    language: 'Icelandic',
    pages: 470,
    title: 'Independent People',
    year: 1934,
  },
];

groupByKey(books, 'author');
