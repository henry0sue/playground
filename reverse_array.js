/**
 * Created by hsue on 6/4/15.
 */
function reverse_array(array){
    var n = array.length;
    var i = 0, j = n -1;

    while(i < j){
        swap(array, i++, j--);
    }
    return array;
}

function swap(array, i, j){
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

var array = [1, 2, 3, 4, 5, 6];
reverse_array(array);
console.log(array);