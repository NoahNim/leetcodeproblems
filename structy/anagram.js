const anagrams = (s1, s2) => {
    let s1count = 0;
    let s2ount = 0;

    for (let i = 0; i < s1.length, i++) {
        s1count += 1;
        for (let j = 0; j < s2.length; j++) {
            if (s1[i].includes(s2[j])) s2ount += 1;
        }
    }

    if (s1count === s2ount) return true;
    else return false;
};