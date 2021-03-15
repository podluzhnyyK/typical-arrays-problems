
exports.min = function min (array) {
    if (array !== 0) {
        return Math.min(...array);
    }

    return 0;
} 

exports.max = function max (array) {
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i]; 
    }
    // возвращаем максимальное значение
    return max;
}

exports.avg = function avg (array) {
    return array.reduce((a, b) => (a + b)) / array.length;
}
