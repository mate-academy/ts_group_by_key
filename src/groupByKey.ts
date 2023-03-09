type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted = {};

  items.forEach((student) => {
    const sortBy = String(student[key]);

    if (!{}.hasOwnProperty.call(sorted, sortBy)) {
      sorted[sortBy] = [];
    }

    sorted[sortBy].push(student);
  });

  return sorted;
}
