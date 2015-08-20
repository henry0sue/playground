/**
 * Created by hsue on 6/1/15.
 */

/** computes the complete permutation of an array. For example: ['a', 'b', 'c'] as input will give us
 *  a b c, a c b, b a c, b c a, c a b, c b a
 *
 */
function permutation(array){
    var ret = [];
    if(array.length == 2){
        return [[array[0], array[1]], [array[1], array[0]]];
    }
    var i;
    var first, copy, partials;
    for(i =0 ; i < array.length; i++){
        copy = array.slice();
        first = copy.splice(i, 1);
        partials = permutation(copy);
        partials.forEach(function(a){
           ret.push(first.concat(a));
        });
    }

    return ret;
}

var test = ['a', 'b', 'c', 'd'];
var results = permutation(test);
results.forEach(function(r){
    console.log(r);
});