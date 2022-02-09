/* eslint-disable max-len */
import students from './students.json';
import books from './books.json';

const { groupByKey } = require('./groupByKey');

describe('Function "groupByKey"', () => {
  test('should be declared', () => {
    expect(groupByKey)
      .toBeInstanceOf(Function);
  });

  test('should return an object', () => {
    expect(typeof groupByKey([], 'year')).toBe('object');
  });

  test('should work with empty array', () => {
    expect(groupByKey([], 'year')).toEqual({});
  });

  test('should group students by "age"', () => {
    const groupedData = groupByKey(students, 'age');

    expect(Object.keys(groupedData))
      .toEqual(['22', '23', '24', '26']);

    expect(groupedData[22].map((student) => `${student.name} ${student.age}`))
      .toEqual(['Willie 22', 'Glenn 22']);

    expect(groupedData[26].map((student) => `${student.name} ${student.age}`))
      .toEqual(['Jessica 26']);
  });

  test('should group students by "surname"', () => {
    const groupedData = groupByKey(students, 'surname');

    expect(Object.keys(groupedData))
      .toEqual([
        'Dorsey',
        'Branscome',
        'Barrera',
        'Paez',
        'Hall',
        'Gandy',
        'Quinn',
        'Buxton',
        'Casillas',
        'Thompson',
      ]);

    expect(groupedData.Branscome[0].surname)
      .toEqual('Branscome');

    expect(groupedData.Gandy[0].surname)
      .toEqual('Gandy');
  });

  test('should group books by year', () => {
    expect(groupByKey(books, 'year')).toEqual({
      1818: [{
        author: 'Giacomo Leopardi',
        country: 'Italy',
        imageLink: 'images/poems-giacomo-leopardi.jpg',
        language: 'Italian',
        pages: 184,
        title: 'Poems',
        year: 1818,
      }],
      1851: [{
        author: 'Herman Melville',
        country: 'United States',
        imageLink: 'images/moby-dick.jpg',
        language: 'English',
        pages: 378,
        title: 'Moby Dick',
        year: 1851,
      }],
      1901: [{
        author: 'Thomas Mann',
        country: 'Germany',
        imageLink: 'images/buddenbrooks.jpg',
        language: 'German',
        pages: 736,
        title: 'Buddenbrooks',
        year: 1901,
      }],
      1913: [{
        author: 'D. H. Lawrence',
        country: 'United Kingdom',
        imageLink: 'images/sons-and-lovers.jpg',
        language: 'English',
        pages: 432,
        title: 'Sons and Lovers',
        year: 1913,
      }],
      1918: [{
        author: 'Lu Xun',
        country: 'China',
        imageLink: 'images/diary-of-a-madman.jpg',
        language: 'Chinese',
        pages: 389,
        title: 'Diary of a Madman',
        year: 1918,
      }],
      1924: [{
        author: 'Thomas Mann',
        country: 'Germany',
        imageLink: 'images/the-magic-mountain.jpg',
        language: 'German',
        pages: 720,
        title: 'The Magic Mountain',
        year: 1924,
      }],
      1934: [{
        author: 'Halldór Laxness',
        country: 'Iceland',
        imageLink: 'images/independent-people.jpg',
        language: 'Icelandic',
        pages: 470,
        title: 'Independent People',
        year: 1934,
      }],
      1945: [{
        author: 'Astrid Lindgren',
        country: 'Sweden',
        imageLink: 'images/pippi-longstocking.jpg',
        language: 'Swedish',
        pages: 160,
        title: 'Pippi Longstocking',
        year: 1945,
      }],
      1946: [{
        author: 'Nikos Kazantzakis',
        country: 'Greece',
        imageLink: 'images/zorba-the-greek.jpg',
        language: 'Greek',
        pages: 368,
        title: 'Zorba the Greek',
        year: 1946,
      }],
      1954: [{
        author: 'Yasunari Kawabata',
        country: 'Japan',
        imageLink: 'images/the-sound-of-the-mountain.jpg',
        language: 'Japanese',
        pages: 288,
        title: 'The Sound of the Mountain',
        year: 1954,
      }],
      1959: [{
        author: 'Naguib Mahfouz',
        country: 'Egypt',
        imageLink: 'images/children-of-gebelawi.jpg',
        language: 'Arabic',
        pages: 355,
        title: 'Children of Gebelawi',
        year: 1959,
      }],
      1962: [{
        author: 'Doris Lessing',
        country: 'United Kingdom',
        imageLink: 'images/the-golden-notebook.jpg',
        language: 'English',
        pages: 688,
        title: 'The Golden Notebook',
        year: 1962,
      }],
    });
  });

  test('should group books by language', () => {
    expect(groupByKey(books, 'language')).toEqual({
      Japanese: [{
        author: 'Yasunari Kawabata',
        country: 'Japan',
        imageLink: 'images/the-sound-of-the-mountain.jpg',
        language: 'Japanese',
        pages: 288,
        title: 'The Sound of the Mountain',
        year: 1954,
      }],
      Greek: [{
        author: 'Nikos Kazantzakis',
        country: 'Greece',
        imageLink: 'images/zorba-the-greek.jpg',
        language: 'Greek',
        pages: 368,
        title: 'Zorba the Greek',
        year: 1946,
      }],
      English: [{
        author: 'D. H. Lawrence',
        country: 'United Kingdom',
        imageLink: 'images/sons-and-lovers.jpg',
        language: 'English',
        pages: 432,
        title: 'Sons and Lovers',
        year: 1913,
      }, {
        author: 'Doris Lessing',
        country: 'United Kingdom',
        imageLink: 'images/the-golden-notebook.jpg',
        language: 'English',
        pages: 688,
        title: 'The Golden Notebook',
        year: 1962,
      }, {
        author: 'Herman Melville',
        country: 'United States',
        imageLink: 'images/moby-dick.jpg',
        language: 'English',
        pages: 378,
        title: 'Moby Dick',
        year: 1851,
      }],
      Icelandic: [{
        author: 'Halldór Laxness',
        country: 'Iceland',
        imageLink: 'images/independent-people.jpg',
        language: 'Icelandic',
        pages: 470,
        title: 'Independent People',
        year: 1934,
      }],
      Italian: [{
        author: 'Giacomo Leopardi',
        country: 'Italy',
        imageLink: 'images/poems-giacomo-leopardi.jpg',
        language: 'Italian',
        pages: 184,
        title: 'Poems',
        year: 1818,
      }],
      Swedish: [{
        author: 'Astrid Lindgren',
        country: 'Sweden',
        imageLink: 'images/pippi-longstocking.jpg',
        language: 'Swedish',
        pages: 160,
        title: 'Pippi Longstocking',
        year: 1945,
      }],
      Chinese: [{
        author: 'Lu Xun',
        country: 'China',
        imageLink: 'images/diary-of-a-madman.jpg',
        language: 'Chinese',
        pages: 389,
        title: 'Diary of a Madman',
        year: 1918,
      }],
      Arabic: [{
        author: 'Naguib Mahfouz',
        country: 'Egypt',
        imageLink: 'images/children-of-gebelawi.jpg',
        language: 'Arabic',
        pages: 355,
        title: 'Children of Gebelawi',
        year: 1959,
      }],
      German: [{
        author: 'Thomas Mann',
        country: 'Germany',
        imageLink: 'images/buddenbrooks.jpg',
        language: 'German',
        pages: 736,
        title: 'Buddenbrooks',
        year: 1901,
      }, {
        author: 'Thomas Mann',
        country: 'Germany',
        imageLink: 'images/the-magic-mountain.jpg',
        language: 'German',
        pages: 720,
        title: 'The Magic Mountain',
        year: 1924,
      }],
    });
  });
});
