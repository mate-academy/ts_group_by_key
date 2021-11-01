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

export function groupByKey(
  items: Student[],
  key: keyof Student,
): GroupsMap<Student> {
  const groupedByKey: GroupsMap<Student> = {};

  items.forEach((student) => {
    if (groupedByKey[String(student[key])] === undefined) {
      groupedByKey[String(student[key])] = [student];
    } else {
      groupedByKey[String(student[key])].push(student);
    }
  });

  return groupedByKey;
}
