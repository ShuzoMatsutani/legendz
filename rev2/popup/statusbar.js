var timeID; var stcnt = 20;
msg = "Is that the TALISPOD of Water? 「水のタリスポッドかぁ？」";
wmsg = new Array(21);
wmsg[0] = msg;
blnk = "                                                               ";
for (i = 1; i < 20; i++) {
	b = blnk.substring(0,i);
	wmsg[i]="";
	for (j=0; j < msg.length; j++)
    		wmsg[i] = wmsg[i] + msg.charAt(j) + b;
}

function wiper() {
  if (stcnt > -1) str = wmsg[stcnt]; else str = wmsg[0];
  if (stcnt-- < -20) stcnt = 20;
  window.status = str;
  clearTimeout(timeID);
  timeID = setTimeout("wiper()", 100);
}
