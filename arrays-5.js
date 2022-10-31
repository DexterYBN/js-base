// В файле arrays-5.js создай массив с десятью элементами строкового типа. Перечисли в них имена (без фамилий) своих одногруппников и преподавателей.

// Ниже напиши цикл for, который выводит в консоль имена начинающиеся на букву "а".

let array = ['adam', 'maga', 'alvi', 'arthur', 'muslim', 'ibragim', 'islam', 'khamzat', 'ayub', 'umar']

for (i = 0; i < array.length; i++) {
    if (array[i][0] === 'a') {
        console.log(array[i])
    }
}