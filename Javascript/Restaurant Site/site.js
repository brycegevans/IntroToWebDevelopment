function check(){
var a=document.forms["contact"]["nameInput"].value;
var b=document.forms["contact"]["emailInput"].value;
var c=document.forms["contact"]["phoneInput"].value;
var d=document.forms["contact"]["inquiry"].value;
var e=document.forms["contact"]["information"].value;
var f=document.forms["contact"]["answer"].value
var g=document.forms["contact"]["day"].value;
if (a==null || a=="" || b==null || b=="" || c==null
|| c=="" || d==null || d=="" ||  e==null || e=="" || f==null || f==""
|| g==null)
{
alert("Please fill all the inputs");
}
else{
  alert("Valid Input you may submit");
}
}
