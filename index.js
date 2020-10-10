function getgradeCalculator() {
    
    var Quizes = document.getElementById("Quizes").value;
    var Midterm = document.getElementById("Midterm").value;
    var FinalTest = document.getElementById("FinalTest").value;
    var Oral = document.getElementById("Oral").value;

let total_grades = Quizes + Midterm + FinalTest + Oral

if (total_grades <= 90 && total_grades == 100) {
document.getElementById("final_grade").innerHTML = "A" ; }

else if (total_grades <= 80 ) {
document.getElementById("final_grade").innerHTML = "B" ; }

else if (total_grades <= 70 ) {
document.getElementById("final_grade").innerHTML = "C" ;  }

else if (total_grades <= 60 ) {
document.getElementById("final_grade").innerHTML = "D" ; }

else  {
document.getElementById("final_grade").innerHTML = "F" ; }

} 






