type GroupsMap<S, B> = {
  [key: string]: Array<S | B>;
};

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
  title: string;
  year: number;
}

export function groupByKey(
  items: Array<Student | Book>,
  key: string,
): GroupsMap<Student, Book> {
  const groupItems: GroupsMap<Student, Book> = {};

  items.forEach((item: (Student | Book)): void => {
    const groupKey:string = item[key as keyof (Student | Book)];

    if (!groupItems[groupKey]) {
      groupItems[groupKey] = [];
    }

    groupItems[groupKey]?.push(item);
  });

  return groupItems;
}
