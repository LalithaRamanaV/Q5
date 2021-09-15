var readlineSync = require('readline-sync');
let highestMarks = 0;
let name = '';

for(let i=0; i <5; i=i+1) {
  let studentNames = readlineSync.question("Enter Student no. " + [i+1] + " name: ")
  let unitTestMarks = Number(readlineSync.question("Unit test marks: "));
  let preFinalMarks = Number(readlineSync.question("Pre Final marks: "));
  let finalMarks = Number(readlineSync.question("Final marks: "))
  let totalMarks = unitTestMarks + preFinalMarks + finalMarks;
  let averageMarks = totalMarks / 3;
  console.log("-> Total Marks: " + totalMarks);
  console.log("-> Average Marks: " + averageMarks.toFixed(2));
  console.log("===================")

  if(totalMarks > highestMarks) {
    highestMarks = totalMarks;
    name = studentNames;
  }
}

console.log("Congratulations!"+"\n" + name + " got the highest marks, which is " + highestMarks)