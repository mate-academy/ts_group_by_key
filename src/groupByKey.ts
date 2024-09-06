type GroupsMap<T> = {
  [key: string]: T[];
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

export function groupByKey<T extends Book | Student>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const keyValue = item[key];

    if (!groups[keyValue as string]) {
      groups[keyValue as string] = [];
    }

    groups[keyValue as string].push(item);

    return groups;
  }, {});
}
