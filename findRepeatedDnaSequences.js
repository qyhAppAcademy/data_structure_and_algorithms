var findRepeatedDnaSequences = function (s) {
    if (s.length < 10) {
        return [];
    }
    const result = new Set();
    const seqSet = new Set();
    const nucleotides = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };
    const base = 4;
    const k = 10;
    const hashMax = base ** k;
    let current = 0;
    for (let i = 0; i < k; i++) {
        current = current * base + nucleotides[s[i]];
    }
    seqSet.add(current);
    for (let start = 1; start <= s.length - k; start++) {
        current = current * base + nucleotides[s[start + k - 1]];
        current -= nucleotides[s[start - 1]] * hashMax;
        if (seqSet.has(current)) {
            result.add(s.substring(start, start + k));
        }
        else {
            seqSet.add(current);
        }
    }
    return [...result];
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));