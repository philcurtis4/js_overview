
// A word or multiple words wrapped in quotes is called a sting value type
// a number is called a number value type

    //primative value types
    //var firstName = "Philip"; //string
    //var lastName = "Curtis";
    var age = 30; //number
    var isADev = true; //boolean
    var un = undefined; //undefined
    var n = null; //programmers representation of nothing
    var notANumber = NaN; //Not a number - provided when you try to process a math equation and result is not a valid number


    var names = ['Phil', 'Bob', 'Neil', 'James', 'Frank']; //called an array

    var users = ['Bob', 99, 'Ann', 35, 'Billy', 45];

   function myFirstfunction() {
    console.log('function has been called');
   }

   myFirstfunction();

   function printNames (arr) {
    for(const name of arr){
        console.log(name);
    }
   };

   printNames(names);
