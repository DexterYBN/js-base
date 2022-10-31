// В файле arrays-6.js создай массив с десятью элементами числового типа.

let array = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// Ниже напиши цикл for, который выводит в консоль всё четные числа.

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
}

// Еще ниже напиши цикл while, который выводит в консоль все нечетные числа.

i = 0;
while (i < array.length) {
    if (array[i] % 2 !== 0) {
        console.log(array[i])
    }
    i++
}