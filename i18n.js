/**
 * Created by hsue on 5/22/15.
 */
/**

 i18n (where 18 stands for the number of letters between the first i and the last n in the word “internationalization,”) Wiki it.

 Generate all such possible i18n strings for any given string. for eg. "careercup"=>"c7p","ca6p","c6up","car5p","ca5up","care4p","car4up","caree3p","care3up"..till the count is 0 which means its the complete string again.
 * @param word
 */
function i18n(word){
    var size, i, ret = [];
    for(size = 1; size <= word.length - 2; size++){
        for(i = 1; i < word.length - size; i++){
            var s = word.substring(0, i) + size + word.substring(i + size);
            ret.push(s);
        }
    }
    return ret;
}

var results = i18n('careercup');
results.forEach(function(str){
    console.log(str);
});

public List<String> i18n(String word){
    List<String> ret = new ArrayList<String>();
    for(int chunk = 1; chunk <= word.length - 2; chunk++){
        for(int i = 1; i < word.length - chunk; i++){
            String s = word.substring(0, i) + chunk + word.substring(i + chunk);
            ret.add(s);
        }
    }
    return ret;
}