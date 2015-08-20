/**
 *
 * For an integer n, find out all combinations of natural numbers that add up to n. For example, if n
 * is 3, the result is [1, 1, 1], [1, 2], [2, 1]
 */
function constituents(n){
    if(n === 1){
        return [[1]];
    }
    else{
        var i;
        var ret = [];
        for(i = 1; i < n; i++){
            var array = constituents(n - i);
            array.forEach(function(a){
                a.push(i);
            });
            ret = ret.concat(array);
        }

        return ret;
    }
}

var result = constituents(5);
result.forEach(function(array){
    console.log(array);
});