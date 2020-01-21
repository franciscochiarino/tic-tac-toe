const basicCombinations = ['123', '456', '789', '147', '258', '369', '159', '753'];
const allPossibleCombinations = [];

const findCombinations = () => {
    basicCombinations.forEach(n => {
        let a = n[0];
        let b = n[1];
        let c = n[2];
        
        allPossibleCombinations.push(
            a + b + c,
            a + c + b,
            c + b + a,
            c + a + b,
            b + a + c,
            b + c + a
        );
        console.log(allPossibleCombinations);
    })
}

findCombinations();