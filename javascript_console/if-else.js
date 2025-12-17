const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter your age: ", input=>{
    let age=Number(input);
    if (age>=18){
        console.log("You are eligible for vote.")
    } else{
        console.log("You are not eligible for vote.")
    }
    readline.close()
});