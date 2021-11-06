//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...numbers) {
    let primeNumbers = []
    let nonPrimeNumbers = []

    for(let i = 0; i <= numbers.length; i++) 
    {

        for(let x = 2; x < numbers[i]; x++) 
        {
            let isItPrime = true
            if(numbers[i] % x == 0) 
            {
                nonPrimeNumbers.push(numbers[i])
                isItPrime = false
                break;
            }
               
        }

        if(isItPrime!=false) 
        {
            primeNumbers.push(numbers[i])
        }
    }

    console.log("Sayılar : ",...numbers)
    console.log("Asal Sayılar : ",primeNumbers)
    console.log("Asal Olmayan Sayılar : ",nonPrimeNumbers)
}

findPrime(5,9,11,51,33,20)

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function friendsNumbers(...number) {
    let total2 = []

    for(let j = 0; j < number.length; j++) 
    {
        let total = 0
        for (let i = 1; i < number[j]; i++)
        { 
        if(number[j] % i == 0) 
        {
            total = total + i
        }
        }
        total2[j] = total
    } 
    if(total2[1] == number[0] && total2[0] == number[1]) 
    {
        console.log(number[0], " ve", number[1], " arkadaş sayılardır.")
    }
    else 
    {
        console.log(number[0], " ve", number[1], " arkadaş sayı değildir.")
    }
}

friendsNumbers(66,45)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

for (let i = 0; i <=1000; i++) {
    let total = 0
    for (let j = 0; j <=i; j++) {
        if (i%j==0) {
            total = total + j
        }
    }
    if (i*2 == total) {
        console.log(i)
    }
}


// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrime(){
    for (let i = 2; i < 1000; i++) {
        let control=true
        for (let j = 2; j < i; j++) {
            if (i%j==0) {
                control=false
            }
        }
        if (control) {
            console.log(i)
        }
        control=true         
    }
}
findPrime()
