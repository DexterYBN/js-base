// В файле arrays-3.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

let array = [2, -3, -1, 7, -1, 5, 8, 10, 6, 4]

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i])
    }
}