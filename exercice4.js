let val1 = "";
let val2 = 0;
let val3 = "0";
let val4 = false;
let val5 = undefined;
let val6 = null;
let val7 = NaN;
let val8 = "1";
let val9 = 1;
let val10 = " \t\n ";

let diff = 0;

if (val2 == val1 && val2 !== val1) diff++;
console.log(val2,"==",JSON.stringify(val1),"->",val2==val1,"|",val2,"===",JSON.stringify(val1),"->",val2===val1);

if (val2 == val3 && val2 !== val3) diff++;
console.log(val2,"==",JSON.stringify(val3),"->",val2==val3,"|",val2,"===",JSON.stringify(val3),"->",val2===val3);

if (val2 == val4 && val2 !== val4) diff++;
console.log(val2,"==",JSON.stringify(val4),"->",val2==val4,"|",val2,"===",JSON.stringify(val4),"->",val2===val4);

if (val1 == val4 && val1 !== val4) diff++;
console.log(JSON.stringify(val1),"==",val4,"->",val1==val4,"|",JSON.stringify(val1),"===",val4,"->",val1===val4);

if (val6 == val5 && val6 !== val5) diff++;
console.log(val6,"==",val5,"->",val6==val5,"|",val6,"===",val5,"->",val6===val5);

if (val6 == val4 && val6 !== val4) diff++;
console.log(val6,"==",val4,"->",val6==val4,"|",val6,"===",val4,"->",val6===val4);

if (val7 == val7 && val7 !== val7) diff++;
console.log(val7,"==",val7,"->",val7==val7,"|",val7,"===",val7,"->",val7===val7);

if (val9 == val8 && val9 !== val8) diff++;
console.log(val9,"==",JSON.stringify(val8),"->",val9==val8,"|",val9,"===",JSON.stringify(val8),"->",val9===val8);

if (val10 == val2 && val10 !== val2) diff++;
console.log(JSON.stringify(val10),"==",val2,"->",val10==val2,"|",JSON.stringify(val10),"===",val2,"->",val10===val2);

console.log("-----------------------------------------------------------------------------------");
console.log(diff,"paire(s) où == et === donnent des résultats différents");