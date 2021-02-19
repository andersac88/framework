import { User } from './models/User';

const user = new User({ name: 'Andy', age: 20 });

user.on('change', () => {});

user.on('change', () => {});

user.on('tick', () => {});

console.log(user);
