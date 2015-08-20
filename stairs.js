/**
 Implement stairs(N) that (collect the solutions in a list) prints all the ways to climb up a N-step-stairs
 where one can either take a single step or double step.
 We'll use 1 to represent a single step, and 2 to represent a double step.
 * @param n
 * @returns {*}
 */
function stairs(n){
    if(n === 1){
        return [[1]];
    }
    else if(n == 2){
        return [[1, 1], [2]];
    }
    else{
       var r1 = stairs(n - 1);
        r1.forEach(function(array){
            array.push(1);
        });
        var r2 = stairs(n - 2);
        r2.forEach(function(array){
           array.push(2);
        });

        return r1.concat(r2);
    }
}

var result = stairs(5);
result.forEach(function(array){
    console.log(array);
});