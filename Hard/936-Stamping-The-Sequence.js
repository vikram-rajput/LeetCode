/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
 var movesToStamp = function(stamp, target) {
    if (stamp === target) return [0]
    let slen = stamp.length, tlen = target.length - slen + 1,
        ans = [], tdiff = true, sdiff, i, j,
    S = stamp.split(""), T = target.split("")
    while (tdiff)
        for (i = 0, tdiff = false; i < tlen; i++) {
            for (j = 0, sdiff = false; j < slen; j++)
                if (T[i+j] === "*") continue
                else if (T[i+j] !== S[j]) break
                else sdiff = true
            if (j === slen && sdiff) {
                for (j = i, tdiff = true; j < slen + i; j++)
                    T[j] = "*"
                ans.unshift(i)
            }
        }
    for (i = 0; i < T.length; i++) if (T[i] !== "*") return []
    return ans
};