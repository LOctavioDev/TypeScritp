function  esPrimo(n: number, div: number = 2 ){
    if (n < 1)
        return false;
    if (n <= 3)
        return true;
    if (n % div == 0)
        return false;

    if (div * div > n)
    return true

    return esPrimo(n, div + 1)
}

let numer: number = 9;

console.log(esPrimo(numer))


function  fibonacci(n: number): number{
    if (n <= 0)
        return 0

    if (n <= 1)
        return 1

    else
        return fibonacci(n-2) + fibonacci(n-1)
}

console.log(fibonacci(7))


