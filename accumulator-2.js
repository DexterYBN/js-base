// В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

// Создай переменную accumulator и собери в ней сумму всех положительных элементов массива. Для решения используй цикл while.

let array = [2, 4, 6, 8, -10, -1, 3, 5, 7, -9]

let accumulator = 0;
i = 0;
while (i < array.length) {
    if (array[i] > 0) {
        accumulator += array[i]
    }
    i++
}
console.log(accumulator)