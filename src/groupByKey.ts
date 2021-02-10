'use strict';

// describe interfaces
interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
};

function groupByKey(
  array: Book[],
  key: string
) {
  let sorted = [...array];

  if (typeof(array[0][key]) === 'string') {
    sorted.sort((a, b) => );
  }




  return array;
}


console.log(groupByKey(
  [
    {
      "author": "Yasunari Kawabata",
      "country": "Japan",
      "imageLink": "images/the-sound-of-the-mountain.jpg",
      "language": "Japanese",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954
    },
    {
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "imageLink": "images/zorba-the-greek.jpg",
      "language": "Greek",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946
    },
    {
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "imageLink": "images/sons-and-lovers.jpg",
      "language": "English",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913
    },
    {
      "author": "Halld\u00f3r Laxness",
      "country": "Iceland",
      "imageLink": "images/independent-people.jpg",
      "language": "Icelandic",
      "pages": 470,
      "title": "Independent People",
      "year": 1934
    },
    {
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "imageLink": "images/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "pages": 184,
      "title": "Poems",
      "year": 1818
    },
    {
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "imageLink": "images/the-golden-notebook.jpg",
      "language": "English",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962
    },
    {
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "imageLink": "images/pippi-longstocking.jpg",
      "language": "Swedish",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945
    },
    {
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "images/diary-of-a-madman.jpg",
      "language": "Chinese",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918
    },
    {
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "images/children-of-gebelawi.jpg",
      "language": "Arabic",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/buddenbrooks.jpg",
      "language": "German",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/the-magic-mountain.jpg",
      "language": "German",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924
    },
    {
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "images/moby-dick.jpg",
      "language": "English",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851
    }
  ], 'age'
));
