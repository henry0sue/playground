/**
 * Created by hsue on 5/26/15.
 */
/**
 * Given an arbitrary array containing positive and negative numbers, find the contiguous subarray that will
 * yield the maximum sum.
 *
 * @param array
 * @returns {Array.<T>|string|Blob}
 */
function maxSubArray(array){
    var max_end_here = 0,
        max_so_far = 0,
        i;

    var start, end, start2;
    for(i = 0; i < array.length; i++){
        max_end_here = max_end_here + array[i];
        if(max_end_here < 0){
            max_end_here = 0;
            start = -1;
        }
        else if(start < 0){
            start = i;
        }
        if(max_so_far < max_end_here){
            max_so_far = max_end_here;
            start2 = start;
            end = i;
        }
    }

    return array.slice(start2, end + 1);
}

var array = [-2, 1, -3, 4, -5, -2, 1, 5, -3 ];

var ret = maxSubArray(array);
console.log(ret);