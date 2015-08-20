/**
 * Created by hsue on 7/1/15.
 */
/**
 * Given an array containing positive or negative numbers, find out a contiguous subarray that will yield the maximum
 * product.
 *
 * @param array
 * @returns {number}
 */
function max_prod_subarray(array) {
    var max_so_far = 1,
        min_so_far = 1,
        max_over_all = 1;

    array.forEach(function (item, index) {
        if (item > 0) {
            max_so_far = max_so_far * item;
            min_so_far = min_so_far * item;
        }
        else if (item < 0) {
            var tmp = min_so_far;
            min_so_far = max_so_far * item;
            max_so_far = Math.max(tmp * item, 1);
        }
        else{
            max_so_far = 1;
            min_so_far = 1;
        }

        if(max_so_far > max_over_all){
            max_over_all = max_so_far;
        }

    });

    return max_over_all;
}

var array = [2, 3, 4, -5, 2];
var prod = max_prod_subarray(array);
console.log(prod);