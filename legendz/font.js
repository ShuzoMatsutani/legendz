browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
browserOs = navigator.platform;

// Browser,Ver dispatch
nn3up = (browserName == "Netscape" && (browserVer >= 3 && browserVer <= 4));
ie4up = (browserName.indexOf("Microsoft") >= 0 && browserVer >= 4);
nn6   = (browserName == "Netscape" && browserVer == 5);

document.writeln("<STYLE TYPE='text/css'><!--")

if(navigator.appVersion.indexOf("Mac") > 1){

if(ie4up){

		// Mac IE
		

document.writeln("body{font-size:12px;line-height:150%;}")

document.writeln("td{font-size:12px;line-height:150%;}")

document.writeln("font{font-size:12px;line-height:150%;}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px}")

document.writeln(".small{font-size:10px}")

document.writeln(".topmenu{font-size:12px;line-height:170%;}")

document.writeln(".font1{font-size:12px;line-height:150%;}")

document.writeln(".font2{font-size:10px;line-height:130%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

if(nn6){

		// MacNN6


document.writeln("body{font-size:12px;line-height:150%;}")

document.writeln("td{font-size:12px;line-height:150%;}")

document.writeln("font{font-size:12px;line-height:150%;}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px}")

document.writeln(".small{font-size:10px}")

document.writeln(".topmenu{font-size:12px;line-height:170%;}")

document.writeln(".font1{font-size:12px;line-height:150%;}")

document.writeln(".font2{font-size:10px;line-height:130%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

if(nn3up){

		// Mac NN Lower Ver.
		

document.writeln("body{font-size:12px;line-height:150%;}")

document.writeln("td{font-size:12px;line-height:150%;}")

document.writeln("font{font-size:12px;line-height:150%;}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px}")

document.writeln(".small{font-size:10px}")

document.writeln(".topmenu{font-size:12px;line-height:180%;}")

document.writeln(".font1{font-size:12px;line-height:160%;}")

document.writeln(".font2{font-size:10px;line-height:130%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

}


else{



if(ie4up){

		// WIN IE


document.writeln("body{font-size:12px;line-height:150%;}")

document.writeln("td{font-size:12px;line-height:150%;}")

document.writeln("font{font-size:12px;line-height:140%;}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px;line-height:120%;}")

document.writeln(".small{font-size:8px}")

document.writeln(".topmenu{font-size:12px;line-height:190%;}")

document.writeln(".font1{font-size:12px;line-height:170%;}")

document.writeln(".font2{font-size:10px;line-height:150%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

if(nn6){

		// WIN NN6
		

document.writeln("body{font-size:12px}")

document.writeln("td{font-size:12px}")

document.writeln("font{font-size:12px}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px}")

document.writeln(".small{font-size:11px}")

document.writeln(".topmenu{font-size:13px;line-height:180%;}")

document.writeln(".font1{font-size:12px;line-height:170%;color:#ff0000;}")

document.writeln(".font2{font-size:11px;line-height:140%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

if(nn3up){

		// WIN NN Lower Ver.
		

document.writeln("body{font-size:12px}")

document.writeln("td{font-size:12px}")

document.writeln("font{font-size:12px}")

document.writeln(".big{font-size:16px}")

document.writeln(".middle{font-size:14px}")

document.writeln(".small{font-size:11px}")

document.writeln(".topmenu{font-size:13px;line-height:180%;}")

document.writeln(".font1{font-size:13px;line-height:160%;}")

document.writeln(".font2{font-size:11px;line-height:140%;}")

document.writeln(".mbox{background-color:#; font-size:12px;}")

document.writeln("input,select,textarea{background-color:#FFFFFF; font-size:12px;}")
	}

}

document.writeln("a:link {text-decoration: none;color: #FF0000}")

document.writeln("a:visited {text-decoration: none;color: #CC0000}")

document.writeln("a:hover {text-decoration: underline;color: #CC33FF}")

document.writeln("--></STYLE>");	


