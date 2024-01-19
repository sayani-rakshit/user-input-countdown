
function startcountdown(){
   var targetDateInput=document.getElementById("inputdatestart");
   var targetDatevalue=targetDateInput.value;
var endDate=new Date(targetDatevalue);
var endTime=endDate.getTime();
 setInterval(function(){
   var currentDate=new Date();
   var currentTime=currentDate.getTime();
   var remainingTime=endTime-currentTime;
   let min=60*1000;
let hour=60*min;
let day=24*hour;
let addingZero=(number)=>
 number<10 ? `0${number}`:number;
 if(endTime<=currentTime){
    document.getElementById("day").innerText="00";
    document.getElementById("hour").innerText="00";
    document.getElementById("min").innerText="00";
    document.getElementById("sec").innerText="00";
 }else{

let remainingday=Math.floor(remainingTime/day);
let remainighour=Math.floor((remainingTime%day)/hour);
let remainingmin=Math.floor((remainingTime%hour)/min);
let remainingsec=Math.floor((remainingTime%min)/1000);
document.getElementById("day").innerText=addingZero(remainingday);

document.getElementById("hour").innerText=addingZero(remainighour);
document.getElementById("min").innerText=addingZero(remainingmin);
document.getElementById("sec").innerText=addingZero(remainingsec);


 }
},1000)
}
