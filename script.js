//Task 1
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let positiveNum = 0;
for (let i = 0; i<=arr.length; i++) {
    if (arr[i]>=0) {
        sum = sum + arr[i];
        positiveNum = positiveNum + 1;
    }
}
console.log("Сума позитивних елементів: ", sum);
console.log("Кількість позитивних елементів: ", positiveNum);

//Task 2
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//
// let minValue = arr[0];
// for (let i =0 ; i<=arr.length ; i++) {
//     if (arr[i] < minValue ) {
//         minValue = arr[i];
//     }
// }
//
// let posOfMin = arr.indexOf(minValue);
// console.log('Мінімальний елемент масиву:', minValue);
// console.log('Порядковий номер мінімального елемента масиву:', posOfMin);

//Task 3
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//
// let maxValue = arr[0];
// for (let i =0 ; i<=arr.length ; i++) {
//     if (arr[i] > maxValue ) {
//         maxValue = arr[i];
//     }
// }
//
// let posOfMax = arr.indexOf(maxValue);
// console.log('Мінімальний елемент масиву:', maxValue);
// console.log('Порядковий номер мінімального елемента:', posOfMax);

//Task 4
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let numOfNegative = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i]<0) {
//         numOfNegative = numOfNegative +1;
//     }
// }
// console.log('Кількість негативних елементів: ', numOfNegative);

//Task 5
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i]>=0) {
//         result = result + 1;
//     }
// }
// console.log('Кількість непарних позитивних елементів: ', result);

//Task 6
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i]>=0) {
//         result = result + 1;
//     }
// }
// console.log('Кількість парних позитивних елементів: ', result);

//Task 7
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i]>=0) {
//         result = result + arr[i];
//     }
// }
// console.log('Суму парних позитивних елементів: ', result);

//Task 8
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i]>=0) {
//         result = result + arr[i];
//     }
// }
// console.log('Суму непарних позитивних елементів: ', result);

//Task 9
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 1;
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i]>=0 && result !== 0) {
//          result *= arr[i];
//     }
// }
// console.log('Добуток позитивних елементів: ', result);

//Task 10
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// console.log("Початковий масив: ", arr);
//
// let maxNum = arr[0];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//         maxNum = arr[i];
//     }
// }
//
// for (let k = 0; k < arr.length; k++) {
//     if (arr[k] !== maxNum) {
//         arr[k] = 0;
//     }
// }
// console.log('Знайти найбільший серед елементів масиву, інші обнулити: ', arr);