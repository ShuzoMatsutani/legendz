//////お台場イベント案内
function opn_odaiba() {
	opnwin=window.open(
				"odaiba/index.html",
				"info","width=580,height=500,toolbar=0,status=0,resizable=0,menubar=0,scrollbars=0");
}

//////MENU:NEWS
function menu_news() { parent.location.href = "./news2.php" }
//////MENU:レジェンズとは
function menu_whatlegendz() { parent.location.href = "./whats.php" }
//////MENU:キャラクター紹介
function menu_charinfo() { parent.location.href = "./charinfo.php" }
//////MENU:アニメのあらすじ
function menu_story() { parent.location.href = "./story.php" }
//////MENU:バックナンバー
function menu_backmumber() { parent.location.href = "./backnumber.php" }
//////MENU:アニメ制作
function menu_anime() { parent.location.href = "./anime.php" }
//////MENU:イベント
function menu_event() { parent.location.href = "./event2.php" }
//////MENU:プレイランド
////function menu_playland() { parent.location.href = "./playland/index.html" }
function menu_playland() { parent.location.href = "./playland.php" }

//////MENU:登録メンバーの部屋
function menu_members() { parent.location.href = "./members.php" }
//////MENU:お問い合わせ
function menu_infomation() { parent.location.href = "./support2.php" }
//////MENU:商品紹介]
function menu_md() { parent.location.href = "./md.php" }
//////MENU:コミック
//function menu_commic() {  window.open("http://mj.shueisha.co.jp/"); }
function menu_commic() {  parent.location.href = "./commic.php" }
//////MENU:FUJI-TV
//function menu_fujitv() {  window.open("http://www.fujitv.co.jp/legendz/"); }
function menu_fujitv() {  parent.location.href = "./tvanime.php" }

//////MENU:WIZ
function menu_wiz() {  window.open("http://www.wizinc.co.jp/"); }

//////MENU:OPENING-Flash
function menu_opening() { parent.location.href = "./top.html" }

//////MENU:OPENING-Flash
function menu_menu() { parent.location.href = "./menu.html" }

	
//////Browser Checker(MAC-IE4.5)
function bcheck() {
  if (navigator.appName == "Microsoft Internet Explorer") {
    if ((navigator.appVersion.indexOf("Mac") != -1)) {
	    if ((navigator.appVersion.indexOf("4.5") != -1)) {
      		alert("MacIE4.5 is Contents may not act part normally");
		}
	}
  }
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
