/**
 * Created by hsue on 5/18/15.
 */
/**
 * Given an array of origin -> destination airport codes in arbitrary order, calculate the complete itinerary from
 * the 1st airpot to the final destination. The end result is an one dimensional array.
 *
 * @param tickets
 * @returns {Array}
 */
function itinerary(tickets) {
    var nodes = [],
        sourceMap = {},
        destMap = {};
    tickets.forEach(function (t) {
        var node = {
            source: t[0],
            dest: t[1]
        };
        nodes.push(
            node
        );
        sourceMap[t[0]] = node;
        destMap[t[1]] = node;
    });

    var start;
    nodes.forEach(function (n) {
        var n1 = sourceMap[n.dest];

        n.next = n1;
        if(!destMap[n.source]){
            start = n;
        }
    });

    var ret = [];
    ret.push(start.source);
    while (start) {
        ret.push(start.dest);
        start = start.next;
    }

    return ret;
}

var input = [['MUC', 'LHR'], ['CDG', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']];
var results = itinerary(input);
console.log(results);