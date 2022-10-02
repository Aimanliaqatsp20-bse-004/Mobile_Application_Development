let string1="23617";
let arr1=Array.from(string1);
console.log(arr1);
let arr2=arr1.filter(filter_func)
function filter_func(a,b)
{
    if(a,b%2==0)
{
    return a+b;
}
}
console.log(filter_func(2,6))
