/*global $*/


$(document).ready(function() {
	var sec = Number($("#seconds").text());
	var	min = Number($('#minutes').text()); 
	//var flag = true; 
	var x = 0;
	//------------------------------------>
	
	
  //------------------------------------------------------->
  $("#minus").on("click", function() {
	min--;
	if (min < 0)
		{
			$("#minutes").text(0);
			min = 0;
		}
	else 
		$("#minutes").text(min);
  });
	//------------------------------------------------------->
  $("#plus").on("click", function() {
	min++;
	$("#minutes").text(min);
  });
  //------------------------------------------------------->
  $("#reset").on("click", function() {
  	min = 0, sec = 0; 
	$("#minutes").text(min);
	$("#seconds").text(sec);
	clearInterval(x, 1000); 
  });
  //------------------------------------------------------->
  $("#start").on("click", function() {
	  
	  
	x =  setInterval(function helper () {
	  if (sec === 0)
	  {
	  	sec = 59;
	  	min = min - 1;
	  }
		if ( min >= 0)
		{
			$("#minutes").text(min);  
		  	$("#seconds").text(sec--); 
		}
	  else 
	  {
	  	min = 0, sec = 0; 
	  	$("#minutes").text(min);  
	  	$("#seconds").text(sec);
	  }
}
, 1000);
  });
//--------------------------------------------------------->
$("#stop").on("click", function(){
	clearInterval(x, 1000); 
	
	
});


	 
});