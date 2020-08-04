'use strict';
/* global require, describe, test, expect */

const students = require('./students');
const books = require('./books');
const { groupByKey } = require('./groupByKey');

describe('', () => {
  test(`Function 'groupByKey' should be declared`, () => {
    expect(groupByKey).toBeInstanceOf(Function);
  });

  test(`Function 'groupByKey' should return an object`, () => {
    expect(typeof groupByKey([], 'year')).toBe('object');
  });

  test(`Function 'groupByKey' should work with empty array
  input: groupByKey([], 'year')`, () => {
    expect(groupByKey([], 'year')).toEqual({});
  });

  test(`Function 'groupByKey' should group objects from array by key 'age'
  input: groupByKey(students, 'age')`, () => {
    expect(groupByKey(students, 'age')).toEqual({
      '22': [{
        'name': 'Willie',
        'surname': 'Barrera',
        'age': 22,
        'married': false,
        'grades': [3, 5, 5, 3, 3, 5, 4, 4],
      }, {
        'name': 'Glenn',
        'surname': 'Thompson',
        'age': 22,
        'married': false,
        'grades': [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }],
      '23': [{
        'name': 'Christina',
        'surname': 'Branscome',
        'age': 23,
        'married': true,
        'grades': [4, 4, 4, 5, 5, 5, 5, 5],
      }, {
        'name': 'Douglas',
        'surname': 'Paez',
        'age': 23,
        'married': true,
        'grades': [5, 5, 5, 4, 5, 5, 5, 5],
      }, {
        'name': 'Richard',
        'surname': 'Hall',
        'age': 23,
        'married': false,
        'grades': [3, 2, 4, 5, 4, 3, 3, 3],
      }, {
        'name': 'Dale',
        'surname': 'Gandy',
        'age': 23,
        'married': false,
        'grades': [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }, {
        'name': 'Lillian',
        'surname': 'Quinn',
        'age': 23,
        'married': false,
        'grades': [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }],
      '24': [{
        'name': 'Diana',
        'surname': 'Dorsey',
        'age': 24,
        'married': false,
        'grades': [3, 3, 4, 5, 4, 3, 5, 5],
      }, {
        'name': 'Pamela',
        'surname': 'Casillas',
        'age': 24,
        'married': false,
        'grades': [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }],
      '26': [{
        'name': 'Jessica',
        'surname': 'Buxton',
        'age': 26,
        'married': true,
        'grades': [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        'name': 'Jessica',
        'surname': 'Buxton',
        'age': 26,
        'married': true,
        'grades': [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }],
    });
  });

  test(`Function 'groupByKey' should group objects from array by key 'surname'
  input: groupByKey(students, 'surname')`, () => {
    expect(groupByKey(students, 'surname')).toEqual({
      'Dorsey': [{
        'name': 'Diana',
        'surname': 'Dorsey',
        'age': 24,
        'married': false,
        'grades': [3, 3, 4, 5, 4, 3, 5, 5],
      }],
      'Branscome': [{
        'name': 'Christina',
        'surname': 'Branscome',
        'age': 23,
        'married': true,
        'grades': [4, 4, 4, 5, 5, 5, 5, 5],
      }],
      'Barrera': [{
        'name': 'Willie',
        'surname': 'Barrera',
        'age': 22,
        'married': false,
        'grades': [3, 5, 5, 3, 3, 5, 4, 4],
      }],
      'Paez': [{
        'name': 'Douglas',
        'surname': 'Paez',
        'age': 23,
        'married': true,
        'grades': [5, 5, 5, 4, 5, 5, 5, 5],
      }],
      'Hall': [{
        'name': 'Richard',
        'surname': 'Hall',
        'age': 23,
        'married': false,
        'grades': [3, 2, 4, 5, 4, 3, 3, 3],
      }],
      'Gandy': [{
        'name': 'Dale',
        'surname': 'Gandy',
        'age': 23,
        'married': false,
        'grades': [5, 3, 3, 3, 3, 5, 4, 3, 4],
      }],
      'Quinn': [{
        'name': 'Lillian',
        'surname': 'Quinn',
        'age': 23,
        'married': false,
        'grades': [3, 4, 3, 4, 4, 4, 5, 2, 3],
      }],
      'Buxton': [{
        'name': 'Jessica',
        'surname': 'Buxton',
        'age': 26,
        'married': true,
        'grades': [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }, {
        'name': 'Jessica',
        'surname': 'Buxton',
        'age': 26,
        'married': true,
        'grades': [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
      }],
      'Casillas': [{
        'name': 'Pamela',
        'surname': 'Casillas',
        'age': 24,
        'married': false,
        'grades': [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
      }],
      'Thompson': [{
        'name': 'Glenn',
        'surname': 'Thompson',
        'age': 22,
        'married': false,
        'grades': [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
      }],
    });
  });

  test(`Function 'groupByKey' should group objects from array by key 'year'
  input: groupByKey(books, 'year')`, () => {
    expect(groupByKey(books, 'year')).toEqual({
      '1818': [{
        'author': 'Giacomo Leopardi',
        'country': 'Italy',
        'imageLink': 'images/poems-giacomo-leopardi.jpg',
        'language': 'Italian',
        'pages': 184,
        'title': 'Poems',
        'year': 1818,
      }],
      '1851': [{
        'author': 'Herman Melville',
        'country': 'United States',
        'imageLink': 'images/moby-dick.jpg',
        'language': 'English',
        'pages': 378,
        'title': 'Moby Dick',
        'year': 1851,
      }],
      '1901': [{
        'author': 'Thomas Mann',
        'country': 'Germany',
        'imageLink': 'images/buddenbrooks.jpg',
        'language': 'German',
        'pages': 736,
        'title': 'Buddenbrooks',
        'year': 1901,
      }],
      '1913': [{
        'author': 'D. H. Lawrence',
        'country': 'United Kingdom',
        'imageLink': 'images/sons-and-lovers.jpg',
        'language': 'English',
        'pages': 432,
        'title': 'Sons and Lovers',
        'year': 1913,
      }],
      '1918': [{
        'author': 'Lu Xun',
        'country': 'China',
        'imageLink': 'images/diary-of-a-madman.jpg',
        'language': 'Chinese',
        'pages': 389,
        'title': 'Diary of a Madman',
        'year': 1918,
      }],
      '1924': [{
        'author': 'Thomas Mann',
        'country': 'Germany',
        'imageLink': 'images/the-magic-mountain.jpg',
        'language': 'German',
        'pages': 720,
        'title': 'The Magic Mountain',
        'year': 1924,
      }],
      '1934': [{
        'author': 'Halldór Laxness',
        'country': 'Iceland',
        'imageLink': 'images/independent-people.jpg',
        'language': 'Icelandic',
        'pages': 470,
        'title': 'Independent People',
        'year': 1934,
      }],
      '1945': [{
        'author': 'Astrid Lindgren',
        'country': 'Sweden',
        'imageLink': 'images/pippi-longstocking.jpg',
        'language': 'Swedish',
        'pages': 160,
        'title': 'Pippi Longstocking',
        'year': 1945,
      }],
      '1946': [{
        'author': 'Nikos Kazantzakis',
        'country': 'Greece',
        'imageLink': 'images/zorba-the-greek.jpg',
        'language': 'Greek',
        'pages': 368,
        'title': 'Zorba the Greek',
        'year': 1946,
      }],
      '1954': [{
        'author': 'Yasunari Kawabata',
        'country': 'Japan',
        'imageLink': 'images/the-sound-of-the-mountain.jpg',
        'language': 'Japanese',
        'pages': 288,
        'title': 'The Sound of the Mountain',
        'year': 1954,
      }],
      '1959': [{
        'author': 'Naguib Mahfouz',
        'country': 'Egypt',
        'imageLink': 'images/children-of-gebelawi.jpg',
        'language': 'Arabic',
        'pages': 355,
        'title': 'Children of Gebelawi',
        'year': 1959,
      }],
      '1962': [{
        'author': 'Doris Lessing',
        'country': 'United Kingdom',
        'imageLink': 'images/the-golden-notebook.jpg',
        'language': 'English',
        'pages': 688,
        'title': 'The Golden Notebook',
        'year': 1962,
      }],
    });
  });

  test(`Function 'groupByKey' should group objects from array by key 'language'
  input: groupByKey(books, 'language')`, () => {
    expect(groupByKey(books, 'sdsada')).toEqual({
      'Japanese': [{
        'author': 'Yasunari Kawabata',
        'country': 'Japan',
        'imageLink': 'images/the-sound-of-the-mountain.jpg',
        'language': 'Japanese',
        'pages': 288,
        'title': 'The Sound of the Mountain',
        'year': 1954,
      }],
      'Greek': [{
        'author': 'Nikos Kazantzakis',
        'country': 'Greece',
        'imageLink': 'images/zorba-the-greek.jpg',
        'language': 'Greek',
        'pages': 368,
        'title': 'Zorba the Greek',
        'year': 1946,
      }],
      'English': [{
        'author': 'D. H. Lawrence',
        'country': 'United Kingdom',
        'imageLink': 'images/sons-and-lovers.jpg',
        'language': 'English',
        'pages': 432,
        'title': 'Sons and Lovers',
        'year': 1913,
      }, {
        'author': 'Doris Lessing',
        'country': 'United Kingdom',
        'imageLink': 'images/the-golden-notebook.jpg',
        'language': 'English',
        'pages': 688,
        'title': 'The Golden Notebook',
        'year': 1962,
      }, {
        'author': 'Herman Melville',
        'country': 'United States',
        'imageLink': 'images/moby-dick.jpg',
        'language': 'English',
        'pages': 378,
        'title': 'Moby Dick',
        'year': 1851,
      }],
      'Icelandic': [{
        'author': 'Halldór Laxness',
        'country': 'Iceland',
        'imageLink': 'images/independent-people.jpg',
        'language': 'Icelandic',
        'pages': 470,
        'title': 'Independent People',
        'year': 1934,
      }],
      'Italian': [{
        'author': 'Giacomo Leopardi',
        'country': 'Italy',
        'imageLink': 'images/poems-giacomo-leopardi.jpg',
        'language': 'Italian',
        'pages': 184,
        'title': 'Poems',
        'year': 1818,
      }],
      'Swedish': [{
        'author': 'Astrid Lindgren',
        'country': 'Sweden',
        'imageLink': 'images/pippi-longstocking.jpg',
        'language': 'Swedish',
        'pages': 160,
        'title': 'Pippi Longstocking',
        'year': 1945,
      }],
      'Chinese': [{
        'author': 'Lu Xun',
        'country': 'China',
        'imageLink': 'images/diary-of-a-madman.jpg',
        'language': 'Chinese',
        'pages': 389,
        'title': 'Diary of a Madman',
        'year': 1918,
      }],
      'Arabic': [{
        'author': 'Naguib Mahfouz',
        'country': 'Egypt',
        'imageLink': 'images/children-of-gebelawi.jpg',
        'language': 'Arabic',
        'pages': 355,
        'title': 'Children of Gebelawi',
        'year': 1959,
      }],
      'German': [{
        'author': 'Thomas Mann',
        'country': 'Germany',
        'imageLink': 'images/buddenbrooks.jpg',
        'language': 'German',
        'pages': 736,
        'title': 'Buddenbrooks',
        'year': 1901,
      }, {
        'author': 'Thomas Mann',
        'country': 'Germany',
        'imageLink': 'images/the-magic-mountain.jpg',
        'language': 'German',
        'pages': 720,
        'title': 'The Magic Mountain',
        'year': 1924,
      }],
    });
  });
});
