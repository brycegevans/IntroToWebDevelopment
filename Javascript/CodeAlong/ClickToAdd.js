  function clear() {
    for (var loopCounter = 0;
        loopCounter < document.forms["numbers"].elements.length;
        loopCounter++) {
        if (document.forms["numbers"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["numbers"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function reset(){
  clear();
  document.forms["numbers"]["num1"].value= "";
  document.forms["numbers"]["num2"].value= "";
  document.getElementById("results").style.display="none";
  document.getElementById("submitButton").innerText="Submit";


}
function validate(){
  clear();
  var num1= document.forms["numbers"]["num1"].value;
  var num2= document.forms["numbers"]["num2"].value;
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText= "Recalculate";
  document.getElementById("additionResult").innerText= num1 + num2;
  document.getElementById("subtractionResult").innerText= num1 - num2;
  document.getElementById("mulitplicationResult").innerText= num1 * num2;
  document.getElementById("divisionResult").innerText= num1 / num2;

return false;

}
