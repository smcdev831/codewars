function comp(array1, array2) {
    let result;
    if (Array.isArray(array1) && Array.isArray(array2)) {
        result = true;
        const sortedArray1 = array1.sort((a, b) => a - b);
        const squares = array2.map(e => Math.sqrt(e)).sort((a, b) => a - b);
        squares.forEach((e, i) => {
            if (sortedArray1[i] === e) return;
            result = false;
        });
    } else {
        result = false
    }
    return result;
}
