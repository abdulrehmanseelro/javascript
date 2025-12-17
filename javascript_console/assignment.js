const readline =require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Ham aapko apka grade batayenge.\nApni marks darj karen: ", marks=>{
    score=Number(marks)

    if (isNaN(score)){
        console.log("sahi number likhen.");
    }
    else{
        if(score>100){
            console.log("Invalid Number")
        }
        else if(score<0){
            console.log("Invalid Number")
        }
        else if(score>=80){
            console.log("A+");
        }
        else if(score>=70){
            console.log("A");
        }
        else if(score>=60){
            console.log("B");
        }
        else if(score>=50){
            console.log("C");
        }
        else if(score<50){
            console.log("F")
        }
    };
    readline.close();
});