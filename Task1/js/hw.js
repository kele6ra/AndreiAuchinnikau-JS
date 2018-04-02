console.log("1" + 2 + 0);// "120"
//One of elements is a string. Addition operator concatenates in this case.

console.log("1" - 1 + 2);// 2
//Subtract operation will convert a string to a number if string contains number.

console.log(true + false); //1
//True is equal to 1 and false is equal to 0 in the mathematical operations.

console.log(10 / "5"); //2
//Divide operation will convert a string to a number if string contains number.

console.log("2" * "3"); //6
//Multiply operation will convert a string to a number if string contains number.

console.log(4 + 5 + "px"); //"9px"
/*One of elements is a string. Addition operator concatenates in this case. Operations priority in this case is equal. 
Addition is the first, concatenating is the second (from left to right).*/

console.log("$" + 4 + 5); //"$45"
/*One of elements is a string. Addition operator concatenates in this case. Operations priority in this case is equal. 
Concatenating is the first and because of that tha second addition will be hold with a string (from left to right).*/

console.log("42" - 2); //40
//Subtract operation will convert a string to a number if string contains number.

console.log("4px" - 2); //NaN
/*Subtract operation will convert a string to a number if string contains number. In this case string contains not only a number.
It will generate an error and result of it is NaN*/

console.log(7 / 0);  //Infinity
//Divide by zero is infinity.

console.log("  -9\n" + 5); //" -9\n5"
//One of elements is a string. Addition operator concatenates in this case.

console.log("  -9\n" - 5); // -14
//Subtract operation will convert a string to a number if string contains number. Space symbols are cut in these conversations.

console.log(5 && 2); //2
//Logical AND returns the first false value or the last value (if there are not false values) and doesn't convert it to a logical type.

console.log(2 && 5); //5
//Logical OR returns the first false value or the last value (if there are not false values) and doesn't convert it to a logical type.

console.log(5 || 0);//5
//Logical OR returns the first true value or the last value (if there are not true values) and doesn't convert it to a logical type.

console.log(0 || 5);//5
//Logical OR returns the first true value or the last value (if there are not true values) and doesn't convert it to a logical type.

console.log(null + 1);//1
//NULL is equal to 0 in the mathematical operations.

console.log(undefined + 1);//NaN
//undefined is equal to NaN in the mathematical operations.

console.log(null == "\n0\n"); //false
//NULL converts with a not empty string. The not empty string is equal to the true, but null is equal to the false in the comparison.

console.log(+null == +"\n0\n"); //true
//NULL and not empty string will be converted to a number because of the specific property of unary addition operation.

console.log([] + {}); //"[object Object]"

console.log({} + []); // "[Object object]"
