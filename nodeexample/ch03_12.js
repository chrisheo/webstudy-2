var users = [{name : 'hanchi', age : 20}, {name:'duchi', age:21}];
console.log('배열 원소의 개수 : ' + users.length);

users.unshift({name : 'sechi', age : 22});
console.log('배열 원소의 개수 : '+ users.length);
console.dir(users);


var elem = users.shift();
console.log('배열원소개수 : ' +users.length);

console.log('pop으로 꺼내진것');
console.dir(elem);
