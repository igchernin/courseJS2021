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

let sort = usersArr.sort((a,b) => a.id - b.id)


console.log(sort);


// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)

id: 1, name: 'viktor',surname:'ibrahimov',email:'ibra@mail.ru',phone:'0667678855',order:
{tovary: 'manka','grachka','perlovka'
}


// - створити пустий масив, наповнити його 10 об'єктами Client


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
