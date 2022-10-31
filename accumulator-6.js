// В файле accumulator-6.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

// Для решения используй любой из циклов на своё усмотрение.

let array = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

let accumulatorOdd = []
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        accumulatorOdd.push(array[i])
    }
}
console.log(accumulatorOdd)