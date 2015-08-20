/**
 * Created by hsue on 5/11/15.
 */
function traverse(root){
    var queue1 = [],
        queue2 = [];
    queue1.push(root);

    var node, children;

    while(queue1.length > 0 || queue2.length > 0){
        while(queue1.length > 0){
            node = queue1.shift();
            process.stdout.write(node.value + ' ');
            children = node.children.slice();
            children.reverse();
            children.forEach(function(c){
               queue2.push(c);
            });
        }

        process.stdout.write('\n');
        while(queue2.length > 0){
            node = queue2.shift();
            process.stdout.write(node.value + ' ');
            children = node.children.slice();
            children.forEach(function(c){
                queue1.push(c);
            });
        }

        process.stdout.write('\n');
    }
}

function printLevel(node, level, ltr){
    if(level === 1){
        process.stdout.write(node.value + ' ');
    }
    else if(level > 1){
        var children = node.children.slice();
        if(!ltr){
            children.reverse();
        }

        children.forEach(function (c, index) {
            printLevel(c, level - 1, ltr);
        });

    }
}

function printSpiral(root){
    var h = height(root);
    var i;
    var ltr = true;
    for(i = 1; i <= h; i++){
        printLevel(root, i, ltr);
        process.stdout.write('\n');
        ltr = !ltr;
    }
}

function height(node){
    var h = 0;
    if(node.children && node.children.length > 1){
        node.children.forEach(function(c){
            h = Math.max(h, height(c));
        });
        return h + 1;
    }
    else{
        return 1;
    }
}

function test(){
    var levels = [[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]];
    var i, j;
    var root, node, prevNodes, levelNodes;


    for(i = 0; i < levels.length; i++){
        levelNodes = [];
        for(j = 0; j < levels[i].length; j++){
            node = {
                value: levels[i][j],
                children: []

            };
            levelNodes.push(node);

            if(!root){
                root = node;
            }
            if(prevNodes){
                prevNodes[Math.floor(j/2)].children.push(node);
            }
        }
        prevNodes = levelNodes;

    }

    traverse(root);

    process.stdout.write('\n\n');

    printSpiral(root);
}

test();