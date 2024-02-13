function multiplyArray(arr) {

    const tempArr = Array.from({length: arr.length}, (_, i) => i - i + 1);
    const tempArrB = Array.from({length: arr.length}, (_, i) => i - i + 1);
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i - 1];
        tempArr[i] = num * tempArr[i - 1];
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        const num = arr[i + 1];
        tempArrB[i] = num * tempArrB[i + 1]
    }


    for (let i = 0; i < arr.length; i++) {
        result.push(tempArrB[i] * tempArr[i]);
    }
    return result;
}

console.log(multiplyArray([1,2,3]));