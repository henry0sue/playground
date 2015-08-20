/**
 * Created by hsue on 7/8/15.
 */

/**
 * Find the second largest item in a Binary Search Tree
 *
 * @param node
 */
function second_of_bst(node){
    var cursor = node,
        largest;
   while(cursor.right){
       cursor = cursor.right;
   }
    largest = cursor;
    if(largest.left){
        return largest.left;
    }
    else{
        cursor = node;
        while(cursor.right != largest){
            cursor = cursor.right;
        }
        return cursor;
    }
}

function build_balanced_tree(array, lo, hi){
    if(lo > hi){
        return null;
    }
    else if(lo == hi){
        return {value: array[lo]};
    }
    var mid = Math.floor(lo + (hi - lo)/2);

    var node = { value: array[mid] };
    node.left = build_balanced_tree(array, lo, mid-1);
    node.right = build_balanced_tree(array, mid + 1, hi);
    return node;
}

function build_left_tree(array){
    var i, root, node;
    root = {value: array[array.length - 1]};
    node = root;
    for(i = array.length - 2; i >= 0; i--){
        node.left = {value: array[i]};
        node = node.left;
    }
    return root;
}

function build_right_tree(array){
    var i, root, node;
    root = {value: array[0]};
    node = root;
    for(i = 1; i < array.length; i++){
        node.right = {value: array[i]};
        node = node.right;
    }
    return root;

}

var array = [2, 5, 7, 13, 15, 16];

var root = build_balanced_tree(array, 0, array.length - 1);

var second = second_of_bst(root);

console.log(second);

root = build_left_tree(array);

second = second_of_bst(root);

console.log(second);

root = build_right_tree(array);

second = second_of_bst(root);

console.log(second);