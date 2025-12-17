// Interface
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
// Interface complete
readline.question("Enter first number: ", a=>{
    readline.question("Enter second number: ", b=>{
        a=Number(a)
        b=Number(b)

        if (isNaN(a)||isNaN(b)){
            console.log("Please enter valid number.")
        } else{
            console.log("a + b =", a + b);
            console.log("a - b =", a - b);
            console.log("a * b =", a * b);
            console.log("a / b =", a / b);
            console.log("a % b =", a % b);
            console.log("a ** b =", a ** b);
        }
        readline.close();
    });
});