// В файле accumulator-5.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorEven и собери в ней четные числа массива.

// Для решения используй любой из циклов на своё усмотрение.

let array = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

let accumulatorEven = []
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        accumulatorEven.push(array[i])
    }
}
console.log(accumulatorEven)