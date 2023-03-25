/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let totalPairs = getPairs(n), uf = new UnionFind(n);
  for (let [a, b] of edges) {
    uf.union(a, b);
  }
  let roots = new Set();
  for (let i = 0; i < n; i++) {
    roots.add(uf.find(i));
  }
  for (let root of roots) {
    let groupSize = uf.size[root];
    totalPairs -= getPairs(groupSize);
  }
  return totalPairs;
  
  function getPairs(n) {
    return (n - 1) * n / 2;
  } 
};

class UnionFind {
  constructor(size) {
    this.root = Array(size);
    this.rank = Array(size);
    this.size = Array(size); // size[i] = size of group i
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
      this.size[i] = 1;
    }
  }
  find(x) {
    if (this.root[x] === x) return x;
    return this.root[x] = this.find(this.root[x]);
  }
  union(x, y) {
    let rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return false;
    if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX]++;
      this.size[rootX] += this.size[rootY];
    }
    return true;
  }
}