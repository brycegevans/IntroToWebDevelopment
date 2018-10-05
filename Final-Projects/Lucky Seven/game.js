function start(){
  var a = document.forms["game"]["bet"].value;
  var count=0;
  roll(a,a,a,count,count);
}
function roll(start,bet,maxAmount,amountNum,count){
  if(bet == 0){
    save(start,bet,maxAmount,amountNum,count);
    return;
  }
  var d1= Math.floor(Math.random() * 6) + 1;
  var d2= Math.floor(Math.random() * 6) + 1;
  count++;
  if( (d1+d2)==7){
    bet+=4;
  }
  else{
    bet-=1;
  }
  if(bet >= maxAmount){
    maxAmount=bet;
    amountNum=count;
  }
  roll(start,bet,maxAmount,amountNum,count);
}
function save(start ,bet, maxAmount, amountNum, count){
    document.getElementById("results").style.display = "block";
  document.getElementById("start").innerText= start;
  document.getElementById("totalR").innerText= count;
  document.getElementById("high").innerText= maxAmount;
  if (amountNum == 0){
  document.getElementById("highC").innerText= amountNum+1;
}
else{
  document.getElementById("highC").innerText= amountNum;
}
return false;
}
