function atividade2(array) {
if (!array.length) return console.log(-1);

    for(var i = 0; i < array.length; i++) {
        if((array[i] % 2 === 0) && (array[i] !== 0)) {
            array[i] = 0;
        }
    }
    console.log(array);
}

atividade2([1, 3, 4, 6, 80, 33, 23, 90]);
atividade2([]);