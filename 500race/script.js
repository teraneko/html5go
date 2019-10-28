/*--500px競争  --*/
function $(id){return document.getElementById(id);}

var mypx=0;
var interval=5;
var startTime;

var bgm1 = new Audio();
bgm1.src="bgm1.mp3";
var bgm2 = new Audio();
bgm2.src="bgm2.mp3";

$("btn1").addEventListener("click",fnc1);

function fnc1(){
	$("runner").style.transform="rotate("+(mypx%3-1)*5+"deg)";
	$("runner").style.top=50+Math.sin(mypx/180*Math.PI)*50+"px";

	mypx+=interval;
	$("runner").style.left = mypx+"px";
	$("btn1").innerHTML=mypx+"px";
	
	var now=new Date();
	
	if(mypx===interval){
		startTime=now.getTime();
		bgm1.play();
	}
	
	//ゴール
	if(500<=mypx){
		$("btn1").disabled="disabled";
		$("btn1").innerHTML += "<br>"+(now.getTime()-startTime)/1000+"s";
		$("btn1").style.lineHeight="1.5em";
		bgm1.pause();
		bgm2.play();
	}
}
