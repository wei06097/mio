document.write('<script src="time.js"></script>');
/*-------------------------------------------------------------初始化*/
var counter;
function init(cont,flag){
	counter=cont;
	detect();
	for (var i=1; i<=counter; i++){addSpeakEvent(i);addPauseEvent(i);}
	if(flag==false){
		for (var i=1; i<=counter; i++){document.getElementById("yo"+i).style="display:none;";}
		document.getElementById("jpply").style="background-color:#666666; display:block;";
	}
}
function detect(){
	var videotd=document.getElementById("video");
	var videotb=document.getElementById("song");
	if(document.body.clientWidth<document.body.clientHeight){
		videotd.style="width:90vw; height:calc(calc(90vw * 9) / 16);";
		videotb.style="width:90vw;";
	}
	if(document.body.clientWidth>document.body.clientHeight){
		videotd.style="width:60vw; height:calc(calc(60vw * 9) / 16);";
		videotb.style="width:60vw;";
	}
}
function addSpeakEvent(number) {
	document.getElementById("play"+number).addEventListener('click',function (){
		setCurrentTime(number);
	});
}
function addPauseEvent(number) {
	document.getElementById("pause"+number).addEventListener('click',function (){
		player.pauseVideo();
	});
}
/*-------------------------------------------------------------Youtube-API*/
var player;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady(id) {
	player = new YT.Player("player", {
		height:"100%", 
		width:"100%", 
		videoId:id,
	});
}
function setCurrentTime(slideNum) {
	if(isNaN(timearr[slideNum])==true){return;}
	player.seekTo(timearr[slideNum],true);
	player.playVideo();
}
/*------------------------------------------------------------------------------------------btn*/
function getStyle(id, name){
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? 
	window.getComputedStyle(element, null).getPropertyValue(name) : null;
}
var TagFlag=1;
function showLY(type,btnid){
	if(type!="run"){
		var state=getStyle(type+1,"display");
		if(state=="block"){
			for (var i=1; i<=counter; i++){document.getElementById(type+i).style="display:none;";}
			document.getElementById(btnid).style="background-color:#666666; display:block;";
		}
		else if(state=="none"){
			for (var i=1; i<=counter; i++){document.getElementById(type+i).style="display:block;";}
			document.getElementById(btnid).style="background-color:#aaaaaa; display:block;";
		}
	}
	else{
		TagFlag++;TagFlag%=2;
		if(TagFlag==true){show("small");document.getElementById(btnid).style="background-color:#aaaaaa; display:block;";}
		else if(TagFlag==false){hiddens("small");document.getElementById(btnid).style="background-color:#666666; display:block;";}
	}
}
function show(Class){
    	var s = document.getElementsByClassName(Class);
   	for(var i = 0;i<s.length;i++){
   		s[i].style.display="block";
   	}
}
function hiddens(Class){
    	var s = document.getElementsByClassName(Class);
   	for(var i = 0;i<s.length;i++){
   		s[i].style.display="none";
  	}
}