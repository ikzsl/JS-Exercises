const likes = (names) => {
  const keys = {
    0: () => 'no one likes this',
    1: (names) => `${names} likes this`,
    2: (names) => `${names[0]} and ${names[1]} like this`,
    3: (names) => `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: (names) =>
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  };

  return keys[names.length](names);

};

likes([]);
likes(['Peter']);
likes(['Jacob', 'Alex']);
likes(['Max', 'John', 'Mark']);
likes(['Alex', 'Jacob', 'Mark', 'Max']);

module.exports = likes;
