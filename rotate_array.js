/**
 * Created by hsue on 6/4/15.
 */
/**
 * Rotate an array n times
 * @param array
 * @param n
 */
function rotate_array(array, n){
    var tmp, i;
    while(n > 0){
        tmp = array[0];
        for(i = 0; i < array.length -1 ;i++){
            array[i] = array[i+1];
        }
        array[array.length - 1] = tmp;
        n--;
    }

    return array;
}

var array = [1, 2, 3, 4, 5];

rotate_array(array, 2);
console.log(array);