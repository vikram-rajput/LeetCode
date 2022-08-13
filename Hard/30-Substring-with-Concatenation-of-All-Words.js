/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    const sequences = []
    const wordLength = words[0].length
    const seqLength = wordLength * words.length
    if(seqLength <= 0) return sequences
    
    const wmap = words.reduce((a,c) => {
        a.set(c, (a.get(c) || 0) + 1)
        return a
    }, new Map())
    
    for(let i = 0; i < s.length - seqLength + 1; i++) {
        if(isSequence(s, i, wmap, wordLength)) sequences.push(i)
    }
    return sequences
};
const isSequence = (s, si, wmap, wordLength) => {
    if(si >= s.length) return wmap.size === 0
    const word = s.substring(si, si + wordLength)
    if(!wmap.has(word)) return wmap.size === 0
    const oldCount = wmap.get(word)
    const newCount = oldCount - 1
    if(newCount <= 0) wmap.delete(word)
    else wmap.set(word, newCount)
    const r = isSequence(s,si + wordLength, wmap, wordLength)
    wmap.set(word, oldCount)
    if(r) return true
    return false
}
