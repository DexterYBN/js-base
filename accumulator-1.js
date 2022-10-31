// В файле accumulator-1.js создай массив с десятью элементами числового типа.

// Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.

let array = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

let accumulator = 0;
for (i = 0; i < array.length; i++) {
    accumulator += array[i]
}
console.log(accumulator)