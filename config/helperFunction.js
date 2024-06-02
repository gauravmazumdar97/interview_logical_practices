class Helpers {

    constructor() { }


    // async fibonaaci(n) {
    //     let fibSeries = [0, 1];


    //     for (let i = 2; fibSeries[i - 1] + fibSeries[i - 2] <= n; i++) {
    //        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
       
    //     }
    //     return fibSeries;
    // }

        async fibonaaci(num) {

            let tempArr=[0,1] ;

            if (num < 0) {
                throw new Error("Factorial is not defined for negative numbers.");
            }
            if (num === 0 || num === 1) {
                return 1;
            }

            for (let i = 2; tempArr[i-2] + tempArr[i-1] < num; i++) {
                tempArr[i] = tempArr[i-2] + tempArr[i-1];
            }
                return tempArr.join('+')

    }


    async factorial(num) {
        if (num < 0) {
            throw new Error("Factorial is not defined for negative numbers.");
        }
        if (num === 0 || num === 1) {
            return 1;
        }


        const value = num * await this.factorial(num - 1);
        return value;
    }

    async palindrome(name) {


        const reverse = name.split('');
        console.log('split :', reverse);
        const reversedWord = reverse.reverse();
        console.log('reversedWord :', reversedWord);
        const reversedWord2 = reversedWord.join('');
        console.log('reversedWord2 :', reversedWord2);
        if (reversedWord2.isArray()) {
            console.log('yes');
        } else {
            console.log('yes');
        }

        const words = { name: name.toLowerCase(), reversedWord: reversedWord, reversedCheckWord: reversedWord.toLowerCase() }

        return words

    }



}



module.exports.Helpers = new Helpers();