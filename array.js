const list = [1, 2, 3, 4];

const organized = [...list];
organized[0] = 5;
organized.sort();
console.log(list);
console.log(organized);