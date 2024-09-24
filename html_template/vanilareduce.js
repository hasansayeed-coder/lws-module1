const numbers = [4,3,2,34,2] ;

const res = numbers.reduce((total , curr ) => {
    return total + curr
} , 0)

console.log(res) ;