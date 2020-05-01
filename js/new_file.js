window.onload = function arr(){
	var ih = document.getElementsByClassName('hh')[0];
	var im = document.getElementsByClassName('mm')[0];
	var is = document.getElementsByClassName('ss')[0];
	toTime(is,im,ih);
	setInterval(function (){
		toTime(is,im,ih);
	},1000)
}
function toTime(is,im,ih){
	var item = new Date();
	var sec = item.getSeconds()+1;
	var min = item.getMinutes()+sec/60;
	var hour = item.getHours()+sec/60;
	is.style.transform = "rotate("+(sec*6)+"deg)";
	im.style.transform = "rotate("+(min*6)+"deg)";
	ih.style.transform = "rotate("+(hour*30)+"deg)";
}
