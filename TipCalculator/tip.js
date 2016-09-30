$(function () {

function calculateTip(){

 
 var billAmount = document.getElementById("billAmount").value;
 var serviceQuality = document.getElementById("serviceQuality").value;
 var numPeople = document.getElementById("totalPeople").value;


if(billAmount === "" || serviceQuality == 0){
    return window.alert("Please fill the boxes");
    

}

if(numPeople === "" || numPeople <= 1) {
    numPeople = 1;
   
    //document.getElementById("each").style.display = "none";
    $("#each").hide();
}else {
   // document.getElementById("each").style.display= "block";
     $("#each").show();
}

//document.getElementById("calculate").onclick = function() { calculateTip(); };

var total = (billAmount * serviceQuality) / numPeople;
total = Math.round(total * 100/ 100);
total = total.toFixed(2);


// document.getElementById("totalTip").style.display = "block";
// document.getElementById("tip").innerHTML = total;

$("#totalTip").show();
$("#tip").html('<h3> $' + total + ' </h3>');


// document.getElementById("totalTip").style.display = "none" ;
// document.getElementById("each").style.display ="none";

}
document.getElementById("calculate").onclick = function() { calculateTip(); };

});
$("#clear").click(function(){
    location.reload();
});
$("#textTip").hide();
$("#each").hide();
$("#totalTip").hide();


