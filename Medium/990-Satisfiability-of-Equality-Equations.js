/**
 * @param {string[]} equations
 * @return {boolean}
 */
 var equationsPossible = function(equations) {
    let uf = new UnionFind(26);
     for (let equation of equations) {
       let a = equation[0], b = equation[3];
       if (equation[1] === '=') {
         let charcodeA = a.charCodeAt() - 97, charcodeB = b.charCodeAt() - 97;
         uf.union(charcodeA, charcodeB);
       } 
     }
     for (let equation of equations) {
       let a = equation[0], b = equation[3];
       if (equation[1] === '!') {
         let charcodeA = a.charCodeAt() - 97, charcodeB = b.charCodeAt() - 97;
         if (uf.isConnected(charcodeA, charcodeB)) return false;
       } 
     }
     return true;
   };
   
   class UnionFind {
     constructor(size) {
       this.size = size;
       this.rank = Array(size);
       this.root = Array(size);
       for (let i = 0; i < size; i++) {
         this.rank[i] = 1;
         this.root[i] = i;
       }
     }
     find(x) {
       if (this.root[x] === x) return x;
       return this.root[x] = this.find(this.root[x]);
     }
     union(x, y) {
       let rootX = this.find(x), rootY = this.find(y);
       if (rootX === rootY) return false;
       if (this.rank[rootX] > this.rank[rootY]) this.root[rootY] = rootX;
       else if (this.rank[rootX] < this.rank[rootY]) this.root[rootX] = rootY;
       else {
         this.root[rootY] = rootX;
         this.rank[rootX]++;
       }
       return true;
     }
     isConnected(x, y) {
       return this.find(x) === this.find(y);
     }
   }