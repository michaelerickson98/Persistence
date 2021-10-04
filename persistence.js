const additivePersistence = (num)=>{
    let numArr =Array.from(String(num), toNum);
    if(numArr.length === 1) return 0;
    return additivePersistence(numArr.reduce(addReducer))+1;
}

const multiplicativePersistence = (num)=>{
    let numArr =Array.from(String(num), toNum);
    if(numArr.length === 1) return 0;
    return multiplicativePersistence(numArr.reduce(mulReducer))+1;
}

let toNum = (num) => Number(num);
const addReducer = (previousValue, currentValue) => previousValue + currentValue;
const mulReducer = (previousValue, currentValue) => previousValue * currentValue;
