//Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood1 = foods.slice(1,4);
console.log(modifiedFood1);

//Function #2: Array Splice

const modifiedFood2 = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];

let iseven=numberArray.filter(function(num)
{
return (num%2==0);
})
console.log(iseven);



//Function #3.1: prime


let isprime=numberArray.filter(function(number)
{
return number%2!==0; 
})
console.log(isprime); 


//Function #4: nonprime


let nonPrime=numberArray.filter(function(number1) 
{
return number1%2==0;
});
console.log(nonPrime);



//Function #5: Lambda

let even=numberArray.filter(num => num%2==0);
    
console.log(even);


//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

    let sqrt=myArray.map(function(num)
    {
        return num*num;
    })
    console.log(sqrt);



//Function #7: Reduce

const Array = [2, 3, 5, 10];


    let mul=Array.reduce(function(initial,item)
    {
        return initial*item
    },1);
    console.log(mul)

