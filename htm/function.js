//alert("welcome");
//--------------------------------------------------------------------------載入

var counter=1;
function init(){
	detectScr();
	//listoffall();
}
function detectScr(){
	if(document.body.clientWidth>document.body.clientHeight) {counter=1; menuform(counter)};
	if(document.body.clientWidth<document.body.clientHeight) {counter=0; menuform(counter)};
}
function menuform(state){
	var menu_div = document.getElementById("menu-div");
	var menu_td = document.getElementById("site-page-td1");
	if(state==false){
		menu_div.style="display:none";
		menu_td.style="width:0px";
	}else if(state==true){
		menu_div.style="display:block";
		menu_td.style="width:150px";
	}
}
function toggle(){
	counter++;
	counter%=2;
	menuform(counter);
}

//--------------------------------------------------------------------------Menu-expand

function getStyle(id, name){
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? 
	window.getComputedStyle(element, null).getPropertyValue(name) : null;
}
function expand(menuchar){
	var display = getStyle("menu-big-"+menuchar, "display");
	var menuID=document.getElementById("menu-big-"+menuchar);
	if(display=="none"){menuID.style="display:block";}
	if(display=="block"){menuID.style="display:none";}
}

//--------------------------------------------------------------------------Content

function iframeChange(name){
	var page = document.getElementById("content");
	page.src="htm/" + name + "/" + name + ".html" ;
}
function load(page){
	var vis = document.getElementById("iframe-a");
	var vis_td = document.getElementById("iframe-a"+"-td");
	vis.style="display:none";
	vis_td.style="display:none";
	if(page=="mid"){
		changelist(ListType.mid);
	}
	else if(page=="img"){
		changelist(ListType.img);
	}
	else{
		listoffall();
		vis.style="display:block";
		vis_td.style="display:block";
		iframeChange(page);
	}
}

//--------------------------------------------------------------------------Homepage

function relocate(pagename){
	document.location=pagename;//網頁跳轉
}

//--------------------------------------------------------------------------JSON

var ListType= {  //標籤列表(JSON)
	"img":"piclist", "mid":"musiclist"
};
var JSONkey= Object.keys(ListType);   /* for(var i in JSONkey)  造訪key */
var JSONval= Object.values(ListType); /* for(var i in JSONval)  造訪val */

//---------------------------------------------------------------------------list控制

function changelist(ListId){  //介面轉換
	listoffall();
	liston(ListId);
}
function listoffall(){    //刪掉所有清單
	for(var i in JSONval){
		listoff(JSONval[i]);
	}
}
function liston(ListId){  //顯示指定清單
	var list=document.getElementById(ListId);
	var list_td=document.getElementById(ListId+"-td");
	list.style="display:block";
	list_td.style="display:block";
}
function listoff(ListId){ //關閉指定清單
	var list=document.getElementById(ListId);
	var list_td=document.getElementById(ListId+"-td");
	list.style="display:none";
	list_td.style="display:none";
}

//---------------------------------------------------------------------------music控制

function getMusic(musicname){
	var audio = document.getElementById("usermusic");
	audio.src = "./mid/" + musicname +".mp3";
}
function NoMusic(){
	var audio = document.getElementById("usermusic");
	audio.pause();
}
function volup(){
	var audio = document.getElementById("usermusic");
	var volns=audio.volume*100;
	volns+=10;
	if(volns>100){volns=100;}
	audio.volume=volns/100;
	var vol=document.getElementById("volpasent");
	vol.innerHTML=(volns)+"%";
}
function voldown(){
	var audio = document.getElementById("usermusic");
	var volns=audio.volume*100;
	volns-=10;
	if(volns<10){volns=10;}
	audio.volume=volns/100;
	var vol=document.getElementById("volpasent");
	vol.innerHTML=(volns)+"%";
}

//---------------------------------------------------------------------------picture控制

var picid= ["pekora","ground-pound"];

function getPicture(idname){
	NoPicture();
	var picture = document.getElementById(idname);
	picture.style="display:block";
}
function NoPicture(){
	for(var i in picid){
		var picture = document.getElementById(picid[i]);
		picture.style="display:none";
	}
}

//---------------------------------------------------------------------------註解

/*
function getData(htmlname){
	var req = new XMLHttpRequest();
	req.open("get","htm/music-ctrl/"+htmlname+".html");
	req.onload=function(){
		var content=document.getElementById("content");
		content.innerHTML=this.responseText;
	}
	req.send();
}
*/
