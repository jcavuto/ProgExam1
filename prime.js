// Jeremy Cavuto
// 2/22/24
// CPSC 3750
// program exam #1 
// A

var color = ["#fc900b", "#8062db"];
var i = 0;

function switchColor(){
    var prime = document.getElementById("prime");
    var notprime = document.getElementById("notprime");

    prime.style.backgroundColor = color[i];
    i = (i + 1) % 2;
    notprime.style.backgroundColor = color[i];
}

setInterval(switchColor, 5000);


document.getElementById('inputButton').addEventListener('click', start);

function start(){
    let inputNum = parseInt(document.getElementById('inputNum').value);
    primeList(inputNum);
    nonPrimeList(inputNum);

    let primeButton = document.createElement('button');
    primeButton.innerHTML = "SUM";
    primeButton.id = 'pbutton'
    document.getElementById('prime').appendChild(primeButton);
    document.getElementById('pbutton').addEventListener('click', sumPrime);

    let nonprimeButton = document.createElement('button');
    nonprimeButton.innerHTML = "SUM";
    nonprimeButton.id = 'npbutton'
    document.getElementById('notprime').appendChild(nonprimeButton);
    
    document.getElementById('npbutton').addEventListener('click', sumNonPrime);

    document.getElementById('inputButton').removeEventListener('click', start);

}

function primeList(num){
    let inputNum = num;
    let list = document.getElementById('primelist');

    let text = "";

    for(let i =1 ; i <= inputNum; i++){
        if(isPrime(i) == true){
            text = text + i + "<br>";
        }
    }

    list.innerHTML = text;
}

function nonPrimeList(num){
    let inputNum = num;
    let list = document.getElementById('notprimelist');

    let text = "";

    for(let i =1 ; i <= inputNum; i++){
        if(isPrime(i) == false){
            text = text + i + "<br>";
        }
    }

    list.innerHTML = text;
}

function isPrime(num){
    if(num <=1){
        return false;
    }
    for(let i = 2; i <= (num / 2); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function sumPrime(){
    let inputNum = parseInt(document.getElementById('inputNum').value);

    let total = 0;
    for(let i = 1; i<=inputNum; i++)   {
        if(isPrime(i) == true){
            total = total + i;
        }
    }

    let primeSum = document.createElement('h1');
    primeSum.innerHTML = "Sum: " + total;
    document.getElementById('prime').appendChild(primeSum);

    let primeButton = document.querySelector('#prime button');
    primeButton.removeEventListener('click', sumPrime);

    document.getElementById('pbutton').removeEventListener('click', sumPrime);
}

function sumNonPrime(){
    let inputNum = parseInt(document.getElementById('inputNum').value);

    let total = 0;
    for(let i = 1; i<=inputNum; i++)   {
        if(isPrime(i) == false){
            total = total + i;
        }
    }

    let nonprimeSum = document.createElement('h1');
    nonprimeSum.innerHTML = "Sum: " + total;
    document.getElementById('notprime').appendChild(nonprimeSum);
    document.getElementById('npbutton').removeEventListener('click', sumNonPrime);
}