// 1. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное число) и выводит в консоль все числа n до 0
// function showNegativeNumbers (num) {
//     for (let i = num; i <= 0; i++){
//         console.log(i);
//     }
// }

// const showNegativeNumbers1 = num => {
//     for (let i = num; i <= 0; i++){
//         console.log(i);
//     }
// }

// 2. Напишите функцию, принимающую 2 числа - n, m. Известно, что n всегда больше m. Функция выводит в консоль все числа от n до m
// const showNumbers = (n, m) => {
//     for (let i = n; i >= m; i--){
//         console.log(i);
//     }
// }

// 3. Напишите функцию, которая принимает в качестве аргумента число n (отрицательное или положительное число) и выводит в консоль все числа от 0 до n
// function showNumbers (n) {
//     if (n > 0){
//         for (let i = 0; i <= n; i++){
//             console.log(i);
//         }
//     }
//     else {
//         for (let i = 0; i >= n; i--){
//             console.log(i);
//         }
//     }
// }

// 4. Напишите функцию sumNumbers, которая принимает число n и возвращает сумму всех чисел от 1 до n.
// const sumNumbers = n => {
//     for (let i = 1; i <= n; i++){
//         let sum = ((i + n) / 2) * n ;
//         console.log(sum);    
//         return sum;
//     }
// }

// 5. Напишите функцию factorial, которая принимает число n и возвращает факториал этого числа (произведение всех целых чисел от 1 до n).
// const getFactorial = n => {
    
//     for (let i = 1; i <= n; i++){
//         let factorial =  (i - 1) * n;
//         let sum = factorial * n; // Это задание еще доделаю. Тут застрял с формулой вычитания я факториала.
//         console.log(sum);
//     }
// }
// getFactorial(6);

//6. Напишите функцию, принимающую 2 числа - n, m. Возможны 3 сценария:
  // - n > m
  // - m > n
  // - m === n 
// Функция выводит в консоль все нечетные числа от m до n
// const showUnevenNumbers = (n, m) => {
//     if (n > m) {
//         for (let i = m; i <= n; i++){
//             if (i % 2 === 1){
//                 console.log(i);
//             }
//         }
//     }
//     else if (m > n){
//         for (let i = m; i >= n; i--){
//             if (i % 2 === 1){
//                 console.log(i);
//             }
//         }
//     }
//     else {
//         console.log(m === n);
//     }
// }