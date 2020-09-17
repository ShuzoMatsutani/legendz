// Cyber Eyes JavaScript 2000.12.18 jbroad.

function full(linkurl, winname) {
	var scw = screen.width;
	var sch = screen.height;
	var prop = ",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0";
   	window.name = "cyberwin";
	if (navigator.appName == "Netscape") {
		winhand = window.open(linkurl, winname, "screenX=0,screenY=0,outerWidth=" + scw + ",outerHeight=" + sch);
		winhand.focus();
	}
	else {
		scw -= 10;
		W01 = window.open(linkurl, winname, "left=0,top=0,width=" + scw + ",height=" + sch + prop + ",fullscreen=yes");
	}
}

// Browser Checker(MAC-IE4.5)
function bcheck() {
  if (navigator.appName == "Microsoft Internet Explorer") {
    if ((navigator.appVersion.indexOf("Mac") != -1)) {
	    if ((navigator.appVersion.indexOf("4.5") != -1)) {
      		alert("MacIE4.5 is Contents may not act part normally");
		}
	}
  }
}

// CopyRight Viewer
function opncopy() {
	location.replace("http://www.jbroad.co.jp/web/unit/index.html");
//	copywin=window.open(
//				"copyright.html",
//				"copyright","width=360,height=240,toolbar=0,status=0,resizable=0,menubar=0,scrollbars=0");
}

// PopUP Window Create
function opnwnd1(urlname,wname){
	wnd1=window.open(
				urlname, wname,
				"width=320,height=240,toolbar=0,status=0,resizable=0,menubar=0,scrollbars=0");
}

// Efect-1 Shake
var count = 0;
var ax = new Array(-6,-0, 6, 0);
var ay = new Array(0, -6, 0, 6);
function shake ( ) {
    window.moveBy(ax[count % 4], ay[count % 4]);
    count++;
    if (count < 40) setTimeout("shake();", 20);
}

// Efect-2 Rotate
var i = 0;
var timerID = 0;

function rotate_a() {
  i = i + 0.3;
  leftwin = (5 * Math.sin(i));
  topwin = (5 * Math.cos(i));
  window.moveBy(leftwin, topwin);
}
function rotate() {
//	for(cnt = 0; cnt < 100; cnt++)
//		timerID = setTimeout("rotate_a()", 500);
//	clearTimeout (timerID);
	shake();
	shake();

}



// Button Control Liblry
function MM_preloadImages() {
  if (document.images) {
    var imgFiles = MM_preloadImages.arguments;
    if (document.preloadArray==null) document.preloadArray = new Array();
    var i = document.preloadArray.length;
    with (document) for (var j=0; j<imgFiles.length; j++) if (imgFiles[j].charAt(0)!="#"){
      preloadArray[i] = new Image;
      preloadArray[i++].src = imgFiles[j];
  } }
}

function MM_swapImgRestore() {
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_swapImage() {
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray;
}
