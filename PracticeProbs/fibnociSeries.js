function fib(num){

    if(num==1 || num==2) return 1
    return fib(num-1)+fib(num-2);
}

let fibSeries=fib(10);
console.log(fibSeries);