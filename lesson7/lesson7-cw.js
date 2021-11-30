// - Створити функцію конструктор яка дозволяє створювати об'єкти
// car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car


// function constructor(model, fabricator, year, speed, engine) {
//     this.model = model
//     this.fabricator = fabricator
//     this.year = year
//     this.speed = speed
//     this.engine = engine
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     };
//     this.info = function information() {
//         console.log(`модель - ${this.model}, производитель = ${this.fabricator}, год выпуска - ${this.year}, макс. скорость -
//         ${this.speed}, объем двигателя - ${this.engine}, Водитель - ${this.driver}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = this.speed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let mob1 = new constructor('BMW', 'bmw', 1990, 200, 2.5);
// console.log(mob1);
// mob1.drive()
// mob1.info()
// mob1.increaseMaxSpeed(300)
// console.log(mob1.speed);
// mob1.changeYear(2000);
// console.log(mob1.year);
// mob1.addDriver('Валера')
// console.log(mob1.driver);
// mob1.info()

// - (Те саме, тільки через клас)

class cars {
    constructor(model, fabricator, year, speed, engine) {
        this.model = model;
        this.fabricator = fabricator;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    };

    information() {
        console.log(`модель - ${this.model}, производитель = ${this.fabricator}, год выпуска - ${this.year}, макс. скорость -
        ${this.speed}, объем двигателя - ${this.engine}, Водитель - ${this.driver}`)
    }

    newSpeed() {
        this.speed = this.speed + newSpeed;
    };

    newValue() {
        this.year = newValue
    };

    driver() {
        this.driver = driver;
    };
}

let cars1 = new cars('audi', 'audicml', 2002, 222, 2.2);
// console.log(cars1);
// cars1.drive()
// cars1.information()

// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
//

class newCars extends cars {
    constructor(model, fabricator, year, speed, engive, driver) {
        super(model, fabricator, year, speed, engive);
        this.driver = driver

    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)

    }
}

let newCar1 = new newCars('opel', 'opelerro', 2020, 333, 3.0, 'Валера');
console.log(newCar1);
newCar1.drive()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
