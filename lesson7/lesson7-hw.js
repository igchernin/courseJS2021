// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let usersArr = [
    user1 = new User(2, 'Ihor', 'Chernin', 'chernin91@gmail.com', '0938509925'),
    user2 = new User(7, 'Anna', 'Malevanaya', 'annymalevanaya@gmail.com', '0666545578'),
    user3 = new User(4, 'Maria', 'Pinko', 'mariapinko@gmail.com', '0984565555'),
    user4 = new User(3, 'David', 'Gaus', 'davidg@gmail.com', '0978452267'),
    user5 = new User(6, 'Ivanka', 'Kolomiya', 'oltrust@gmail.com', '0665491324'),
    user5 = new User(9, 'Viktor', 'Vasilyev', 'Vasilyev@gmail.com', '0665455211'),
    user5 = new User(5, 'Pyotr', 'Vorobyov', 'oltrust@gmail.com', '0665491324'),
    user5 = new User(8, 'Maria', 'Timmerman', 'oltrust@gmail.com', '0665491324'),
    user5 = new User(10, 'Ruslan', 'Nuriyev', 'oltrust@gmail.com', '0665491324'),
    user5 = new User(1, 'Mikhail', 'Tikhonov', 'oltrust@gmail.com', '0665491324'),
]

// console.log(usersArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)


let fil = usersArr.filter((value) => {
    if (value.id % 2 === 0) {
        return value;
    }
});
// console.log(fil);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// let sort = usersArr.sort(function (a, b) {
//     return a.id - b.id;
// });

// //короче вариант
// let sort = usersArr.sort((a, b) => a.id - b.id)
// console.log(sort);


// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)


function Client(id, name, email, phone, order) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.order = order
}

// - створити пустий масив, наповнити його 10 об'єктами Client

let client = []

client.push(a1 = new Client(1, 'Boday', 'bod@mai.ru', '066666666', ['trava', 'sandali', 'verovki']))
client.push(a2 = new Client(2, 'Vasya', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup']))
client.push(a2 = new Client(3, 'Petro', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'iris']))
client.push(a2 = new Client(4, 'Ivan', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'maslo', 'korobka']))
client.push(a2 = new Client(5, 'Kostua', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'tova', 'tos', 'toster', 'ira']))
client.push(a2 = new Client(6, 'Taras', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'mas', 'qweq', 'adasd', 'asdasdasd', 'assaassaas']))
client.push(a2 = new Client(7, 'Radik', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'sasdasd', 'asdasda', 'asdasdad', 'asdasda']))
client.push(a2 = new Client(8, 'Kent', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup', 'asdasd']))
client.push(a2 = new Client(9, 'Oleg', 'asdasd@mai.ru', '055555444', ['tomaty', 'krosy', 'cup']))

// console.log(client);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort = client.sort(function (a, b) {
    return a.order.length - b.order.length;
})
console.log(sort);
