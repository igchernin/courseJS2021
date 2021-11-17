// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

//
// let i = 0
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }


//     2. перебрати його циклом for
// for (i = 0; i < array.length; i++) {
//     document.write(`${array[i]} <br>`)
//     console.log(array[i])
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0
// while (i < array.length) {
//         console.log(array[i]);
//     i+=2
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i+=2) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         const arrayElement = array[i];
//         console.log(arrayElement)
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten'
//         // const arrayElement = array[i];
//     }
// }
// console.log(array)


// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//     1. перебрати його циклом while

//
// let i = array.length -1
// while (i <= 0) {
//     console.log(array[i])
//     i--;
// }


//     2. перебрати його циклом for
//
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0
// while (i < array.length) {
//         console.log(array[i]);
//     i+=2
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i+=2) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         const arrayElement = array[i];
//         console.log(arrayElement)
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten'
//         // const arrayElement = array[i];
//     }
// }
// console.log(array)