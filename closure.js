/**
 * Created by hsue on 5/29/15.
 */
var i;
for(i = 0; i < 10; i++){
    /*var f = (function(x){
        return function(){
            console.log(x);
        }
    })(i);
    setTimeout(f, 1000);*/
    setTimeout(function(){
        console.log(arguments[0]);
    },
    1000,
    i);
}
