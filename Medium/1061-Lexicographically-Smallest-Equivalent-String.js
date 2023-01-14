/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let uf = new UnionFind(26), n = s1.length;
    for (let i = 0; i < n; i++) {
      let charcode1 = s1.charCodeAt(i) - 97;
      let charcode2 = s2.charCodeAt(i) - 97;
      uf.union(charcode1, charcode2);
    }
    let smallestCharcode = Array(26).fill(0).map((_, index) => index);
    for (let i = 0; i < 26; i++) {
      let parent = uf.find(i);
      smallestCharcode[parent] = Math.min(smallestCharcode[parent], i);
    }
    
    let res = "";
    for (let char of baseStr) {
      let charcode = char.charCodeAt() - 97;
      let parentCharcode = uf.find(charcode);
      let smallestChar = String.fromCharCode(smallestCharcode[parentCharcode] + 97);
      res += smallestChar;
    }
    return res;
  };
  
  class UnionFind {
    constructor(n) {
      this.root = Array(n);
      this.rank = Array(n);
      for (let i = 0; i < n; i++) {
        this.root[i] = i;
        this.rank[i] = 1;
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
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    }
  }