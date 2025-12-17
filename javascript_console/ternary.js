const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter your age: ", input=>{
    let age=Number(input)
    if (isNaN(input)){
        console.log("Enter valid number.")
    } else{
// Using ternary operator for if else conditions.
        let result=(age>=18)? "You are eligible for vote":"You are not eligible for vote";
        console.log(result);
    }
    readline.close();
});