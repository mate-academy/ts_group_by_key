type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(object: T[], key: keyof T): GroupsMap<T> {
  const finalObject: GroupsMap<T> = {};

  object.forEach((el) => {
    const keyValue = el[key];

    if (keyValue) {
      const keyString = String(keyValue);

      if (keyString.trim()) {
        const isKeyExist = Object.prototype.hasOwnProperty.call(
          finalObject,
          keyString,
        );

        if (!isKeyExist) {
          finalObject[keyString] = [];
        }

        finalObject[keyString].push(el);
      }
    }
  });

  return finalObject;
}
