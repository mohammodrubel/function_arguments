function main (a,b,c){
    var result=a+b+c
    console.log(result)
}
main(2356,2356,34)


var xyz1 = [12,56,33]
var xyz2 = [87,67,90]
var xyz3 =[90,99,78]
var sum1=0

for (var i=0; i<xyz1.length; i++){
    sum1+= xyz1[i]
}
console.log(sum1)


var sum2=0
for (var i=0; i<xyz2.length; i++){
    sum2 += xyz2[i]
}
console.log(sum2)

var sum3=0
for (var i=0; i<xyz3.length; i++){
    sum3 += xyz3[i]
}
console.log(sum3)

var xyz1 = [12,56,33]
var xyz2 = [87,67,90]
var xyz3 =[90,99,78]

function sumOfSingleArray(xyz){
    var sum=0

    for (var i=0; i<xyz.length; i++){
        sum += xyz[i]
    }
    console.log(sum)
}

sumOfSingleArray(xyz1)
sumOfSingleArray(xyz2)
sumOfSingleArray(xyz3)


var abc1 =[30,76,87,34]
var abc2 =[68,75,98,89]
var abc3 =[87,09,90,78]
var abc4 =[89,90,99,56]

var sum =0
function totalArray(abc){
    for (var i=0; i< abc.length; i++){
        sum += abc[i]
    }
    console.log(sum)
}

totalArray(abc1)
totalArray(abc2)
totalArray(abc3)
totalArray(abc4)

function real(a,b){
    var result = a+b
    console.log(result)
}
real(10,20)


var a = [1,2,5,76,43]
var b = [45,3,6,7,43]
var c = [3,56,43,54]
    var sum1 = 0
        for (var i=0; i<a.length;i++){
            sum1+=a[i]
        }
        console.log(sum1)

    var sum2 = 0
    for (var i=0; i<a.length;i++){
        sum2+=b[i]
    }
    console.log(sum2)

    var sum3=0
    for(var i=0; i<c.length;i++){
        sum3+=c[i]
    }
    console.log(sum3)
    function sumOfArry(a,b,c){
        var sum = 0
        for(var i=0; i<a.length;i++){
            sum+=a[i]
        }
        console.log(sum)
    }
    sumOfArry (a)
    sumOfArry (b)
    sumOfArry (c)

    var x =[12,35,65,34,39,58,23,45]
    var y =[23,56,76,55,39,58,23,56]
    var z =[45,65,3,544,39,58,23,4]

    function arryOfSum(x,y,z){
        sum =0
        for (var i=0; i<x.length;i++){
            sum +=x[i]
        }
        console.log(sum)
    }
    arryOfSum(x)
    arryOfSum(y)
    arryOfSum(z)
    function arr (a,b,c){
        // console.log(arguments)
        for (var i=0; i<arr.length;i++){
            console.log(arguments[i])
        }
    }
    arr(234,234567,234)
   
    function test (){
        sum=0
        for (i=0; i<arguments.length;i++){
            sum+=arguments[i]
        }
        console.log(sum)
    }
    test (34,345678,34567)
    test(3,4,6,67,8,6,6,5,4,4,4,33,2,2,45,6,7,7,7,5,5,4)

    function test (){
        sum=0
        for (i=0; i<arguments.length;i++){
            sum+=arguments[i]
        }
        return sum
    }
    // var number1 34,345678,34567
    test(3,4,6,67,8,6,6,5,4,4,4,33,2,2,45,6,7,7,7,5,5,4)


    function rubel (){
        sum=0
            for(i=0;i<arguments.length;i++){
                sum+=arguments[i]
            }
        return sum
    }
    var a= rubel (2345,34567,34567)
    var b=rubel (4567,5678,096,567,876654)
    console.log(a+ " , " + b)
    

    function ready (a,b){
        var result=a+b
        console.log(result)
    }
    ready(34567,34567)



    var arr1=[234,456,567,67,3456]
    var arr2=[56,38,497,394,85733]
    var arr3=[64,584,37847,39,595]

    function main(arr){
        sum=0
        for(var i=0;i<arr.length;i++){
            sum+=arr[i]
            
        }
        console.log(sum)
    }
    main(arr1)
    main(arr2)
    main(arr3)

    function mein(numberOne,NumberTwo){
        var result = numberOne+NumberTwo
        console.log(result)
    }
    mein(34567,4567)
function mainFunction(){
    console.log('Hello world')
}
// mainFunction()
for (var i=0;i<5;i++){
    mainFunction()
}

function myFunction(a,b,c){
    var result= a+b-c
    console.log(result)
}
myFunction(456789,45678,7777)

var abc =[12,35,65,35,34]
var def =[24,75,35,67,34]
var ghi =[34,67,65,35,34]
var jkl =[34,44,22,56,34]
var mno =[34,35,67,35,34]

    function mainFunction(abc){
        sum=0
        for(var i=0; i<abc.length;i++){
            sum+=abc[i]
        }
        console.log(sum)
    }
    mainFunction(abc)
    mainFunction(def)
    mainFunction(ghi)
    mainFunction(jkl)
    mainFunction(mno)

function test (a,b,c){
    // console.log(arguments)
    for (var i=0; i<arguments.length;i++){
        console.log(arguments[i])
    }
}
test(3456,345,345)

test(3456,345,345)
function myFunction (a,b,c){
    var sum=0
    for (var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum 
}
var result =myFunction (23,45,64)
console.log(result)

function address (name,add){
   return{
    name:rubel,
    add:shobujbag
   }
}
var result=address(name,add)
console.log(result)

var x = [23,34,234,34]
var y = [34,345,34,45]
var z = [45,344,34,23]

// var sum =0
// for (var i=0;i<x.length;i++){
//     sum+=x[i]
// }
// console.log(sum)
function sumeOfArray (arr){
    var sum =0
    for (var i=0; i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumeOfArray(x)
sumeOfArray(y)
sumeOfArray(z)

var abc = [23,56,43,78,55]
var def = [23,53,45,76,53]
var ghi = [23,54,44,73,56]
var jkl = [23,53,33,28,45]

function someOfArry(arr){
    var sum=0
    for (var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
someOfArry(abc)
someOfArry(def)
someOfArry(ghi)
someOfArry(jkl)


function arg(a,b,c){
    console.log(JSON.stringify(arguments))
    console.log(typeof (a))
}
arg()


var myArray1=[2,3,4,5,6,3,4,5,6,7]
var myArray2=[7,6,5,4,5,6,7,8,7,6]
var myArray3=[0,9,8,7,6,5,4,3,2,3]

function someOfArray (arr){
    var sum =0
        for (var i =0;i<arr.length;i++){
            sum += arr[i]
        }
    console.log(sum)
}
someOfArray(myArray1)
someOfArray(myArray2)
someOfArray(myArray3)

arguments 
function myCustomFunction(a,b,c){
    console.log(typeof arguments)
}
myCustomFunction()

function myCustomFunction(a,b,c){
    console.log(JSON.stringify(arguments))
}
myCustomFunction()

function myCustomFunction(a,b,c){
    console.log(JSON.stringify(arguments))
}
myCustomFunction(10,20,30)

function myCustomFunction(a,b,c){
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
myCustomFunction(10,20,30)

function allSome (){
    sum =0
        for (var i =0;i<arguments.length;i++){
            sum += arguments[i]
        }
    console.log(sum)
}
allSome(23,45,567,78,3456,345)

function myFunction (a,b,c){
    //     console.log(arguments)
    // }
    
    function myFunction (a,b,c){
        console.log(arguments)
    }
    myFunction(23,45,66)

function myFunc(a,b,c){
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}

myFunc(23,456,78)

// without perentesis

function myFunc(){
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}

myFunc(23,456,78)

function xyz (){
    var sum =0
        for (var i=0; i<arguments.length;i++){
            sum+= arguments[i]
        }
    console.log(sum)
}
xyz(2,3,6)

