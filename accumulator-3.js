// В файле accumulator-3.js создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.

// Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push()).

// Для решения используй любой из циклов на своё усмотрение.

let array = ['Java', 'C', 'Python', 'JavaScript', 'Php', 'C++']

let accumulator = []
for (i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
}
console.log(accumulator)