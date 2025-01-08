var massMark=78;
var heightMark=1.69;
var massJohn=92;
var heightJohn=1.95;
var caculateMark=(massMark/(heightMark**2));
var caculateJohn=(massJohn/(heightJohn**2));
var markHigherBMI=true;
console.log("BMI cua mark trong test 1 la:",caculateMark);
console.log("BMI cua mark trong test 1 la:",caculateJohn);
if (caculateMark<=caculateJohn){
    var markHigherBMI=false;}
console.log("Gia tri cua markHigherBMI la:",markHigherBMI);
var massMark1=95;
var heightMark1=1.88;
var massJohn1=85;
var heightJohn1=1.76;
var caculateMark1=(massMark/(heightMark**2));
var caculateJohn1=(massJohn/(heightJohn**2));
var markHigherBMI1=true;
console.log("BMI cua mark trong test 2 la:",caculateMark1);
console.log("BMI cua mark trong test 2 la:",caculateJohn1);
if (caculateMark1<=caculateJohn1){
    var markHigherBMI1=false;}
console.log("Gia tri cua markHigherBMI la:",markHigherBMI1);
console.log("Cau 2");
if (markHigherBMI){
    console.log("Mark's BMI is higher than John's! in test 1");
}else{
    console.log("John's BMI is higher than Mark's! in test 1");
}
if (markHigherBMI){
    console.log("Mark's BMI(",caculateMark.toFixed(1),")is higher than John's(",caculateJohn.toFixed(1),")! in test 1");
}
else{
    console.log("Mark's BMI(",caculateMark.toFixed(1),")is lower than John's(",caculateJohn.toFixed(1),")! in test 1");
}
if (markHigherBMI1){
    console.log("Mark's BMI is higher than John's! in test 2");
}else{
    console.log("John's BMI is higher than Mark's! in test 2");
}
if (markHigherBMI1){
    console.log("Mark's BMI(",caculateMark1.toFixed(1),")is higher than John's(",caculateJohn1.toFixed(1),")! in test 2");
}
else{
    console.log("Mark's BMI(",caculateMark1.toFixed(1),")is lower than John's(",caculateJohn1.toFixed(1),")! in test 2");
}