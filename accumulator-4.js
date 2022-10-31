// В файле accumulator-4.js создай массив с десятью элементами строкового типа. Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.

// Создай переменную accumulator и собери в ней все имена, которые начинаются на букву "а".

// Для решения используй любой из циклов на своё усмотрение.

let array = ['adam', 'maga', 'alvi', 'arthur', 'muslim', 'ibragim', 'islam', 'khamzat', 'ayub', 'umar']

let accumulator = []
for (i = 0; i < array.length; i++) {
    if (array[i][0] === 'a') {
        accumulator.push(array[i])
    }
}
console.log(accumulator)