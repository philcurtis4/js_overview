
// A word or multiple words wrapped in quotes is called a sting value type
// a number is called a number value type

    //primative value types
    var firstName = "Philip"; //string
    var lastName = "Curtis";
    var age = 30; //number
    var isADev = true; //boolean
    var un = undefined; //undefined
    var n = null; //programmers representation of nothing
    var notANumber = NaN; //Not a number - provided when you try to process a math equation and result is not a valid number


    var names = ['Phil', 'Bob', 'Neil', 'James', 'Frank'] //called an array

    
    age == 44
    age == '44' //both true cause it just checks value

    age === '44' //false checks value and type

    //logical operators - return a value on either the left or right side of the operator

    console.log(age || 43); 

    //falsy values
    //0, null, undefined, '', NaN, 
    
    console.log(0 || null || '' || 5 || undefined);
    //will print 5 since it is the first truthy

    console.log(0 && age);