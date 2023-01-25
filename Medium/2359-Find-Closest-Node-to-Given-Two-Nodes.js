/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */


var closestMeetingNode = function (edges, node1, node2) {
    let n = edges.length;
    let dist1 = getDist(node1);
    let dist2 = getDist(node2);

    let ans = -1;
    for (let i = 0; i < n; i++) {
        if (dist1[i] === Infinity || dist2[i] === Infinity) continue;
        let maxDist = Math.max(dist1[i], dist2[i]);
        if (ans === -1 || Math.max(dist1[ans], dist2[ans]) > maxDist) {
            ans = i;
        }
    }
    return ans;

    function getDist(startNode) {
        let queue = [
                [startNode, 0]
            ],
            dist = Array(n).fill(Infinity);
        dist[startNode] = 0;
        while (queue.length) {
            let [node, steps] = queue.shift();
            if (edges[node] === -1) continue;
            if (dist[edges[node]] > steps + 1) {
                dist[edges[node]] = steps + 1;
                queue.push([edges[node], steps + 1]);
            }
        }
        return dist;
    }
};