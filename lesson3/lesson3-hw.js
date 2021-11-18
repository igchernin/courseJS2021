// --створити масив з:
//     - з 5 числових значень
//
// let arrOne = [1, 5, 23, 6, 23]
//
//
// // - з 5 стічкових значень
//
// let arrTwo = ['mama', 'papa', 'ded', 'baba', 'vnuk'];
//
// // - з 5 значень стрічкового, числового та булевого типу
//
// let arrThree = [12, 44, 'doughter', 'wife', true];
//
// // - та вивести його в консоль
// //
//
// console.log(arrOne);
// console.log(arrTwo);
// console.log(arrThree);
// console.log(arrOne[2]);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 5;
// arr[1] = 2;
// arr[4] = 3323;
// console.log(arr);
// arr[2] = 43;
// arr[3] = 121;
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>текст ${i+1}</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>текст с индексом ${i}</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 10) {
//     document.write(`<h1>Заголовок</h1>`)
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Заголовок ${i}</h1>`)
//     i++;
// }


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrTenEl = [1,123,12,42,4,1745,346,324,234,12]
// for (let i = 0; i < arrTenEl.length; i++) {
//     console.log(arrTenEl[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massstring = ['mama', 'papa', 'vasya', 'petro', 'ivan', 'solnce', 'iriska', 'videogid', 'olga', 'taras'];
//
// for (let i = 0; i < massstring.length; i++) {
//     const massstringElement = massstring[i];
//     console.log(massstringElement);
// }
//


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massrand = [
//     'ivan',
//     true,
//     false,
//     23,
//     '+',
//     'masha',
//     'inkognito',
//     54,
//     11,
//     true
// ];
//
// i=0
// while (i < massrand.length) {
//     console.log(massrand[i]);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let massrand = ['ivan', true, false, 23, '+', 'masha', 'inkognito', 54, 11, true];

// for (let i = 0; i < massrand.length; i++) {
//     const massrandElement = massrand[i];
//     if (typeof massrandElement === 'boolean') {
//         console.log(massrandElement);
//     }
// }

// i = 0
// while (i < massrand.length) {
//     if (typeof massrand[i] === 'boolean') {
//         console.log(massrand[i]);
//     }
//     i++;
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// for (let i = 0; i < massrand.length; i++) {
//     const massrandElement = massrand[i];
//     if (typeof massrandElement === 'number') {
//         console.log(massrandElement);
//     }
// }

// let i = 0;
// while (i < massrand.length) {
//     if (typeof massrand[i] === 'number') {
//         console.log(massrand[i]);
//     }
//     i++;
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// for (let i = 0; i < massrand.length; i++) {
//     const massrandElement = massrand[i];
//     if (typeof massrandElement === 'string') {
//         console.log(massrandElement);
//     }
// }

// let i = 0;
// while (i < massrand.length) {
//     if (typeof massrand[i] === 'string') {
//         console.log(massrand[i]);
//     }
//     i++;
// }


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let arrnull = []
// for (i = 0; i < 10; i++) {
//     arrnull[i] = i+3
// }
// console.log(arrnull);


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i}<br>`);
//
// }
//
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i}<br>`);
// }
//
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i}<br>`);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }





