
  // Universal Variables


  {



  var cello = document.getElementById("cello");
  var detunedorgan = document.getElementById("detunedorgan");
  var instrument = document.getElementById('instrument');
  var shift = document.getElementById('Shift');





  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var  four= document.getElementById('four');
  var  five= document.getElementById('five');
  var six = document.getElementById('six');
  var  seven= document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var zero = document.getElementById('zero');
  var less = document.getElementById('less');
  var commah = document.getElementById('comma');

  var a = document.getElementById('a');
  var b = document.getElementById('b');
  var c = document.getElementById('c');
  var d = document.getElementById('d');
  var e = document.getElementById('e');
  var f = document.getElementById('f');
  var g = document.getElementById('g');
  var h = document.getElementById('h');
  var i = document.getElementById('i');
  var j = document.getElementById('j');
  var k = document.getElementById('k');
  var l = document.getElementById('l');
  var m = document.getElementById('m');
  var n = document.getElementById('n');
  var o = document.getElementById('o');
  var p = document.getElementById('p');
  var q = document.getElementById('q');
  var r = document.getElementById('r');
  var  s = document.getElementById('s');
  var  t = document.getElementById('t');
  var u = document.getElementById('u');
  var v = document.getElementById('v');
  var  w = document.getElementById('w');
  var  x = document.getElementById('x');
  var y = document.getElementById('y');
  var z = document.getElementById('z');


  var punkt = document.getElementById('punkt');
  var  slash = document.getElementById('slash');
  var  backslash = document.getElementById('backslash');
  var openbracket = document.getElementById('openbracket');
  var closedbracket = document.getElementById('closedbracket');

  var  equals = document.getElementById('equals');
  var tick = document.getElementById('tick');
  var semicolon = document.getElementById('semicolon');
  var  quote = document.getElementById('quote');
  var r1left = document.getElementById('r1left');
  var r1right = document.getElementById('r1right');

  var r1leftkey = document.getElementById('R1leftconfig');
  var  equalskey = document.getElementById('Equalsconfig');
  var tickkey = document.getElementById('Tickconfig');
  var semicolonkey = document.getElementById('Semicolonconfig');
  var  quotekey = document.getElementById('Quoteconfig');




  var punktkey = document.getElementById('Punktconfig');
  var  slashkey = document.getElementById('Slashconfig');
  var  backslashkey = document.getElementById('Backslashconfig');
  var openbracketkey = document.getElementById('Openbracketconfig');
  var closedbracketkey = document.getElementById('Closedbracketconfig');



  var onekey = document.getElementById("Oneconfig");
  var twokey = document.getElementById("Twoconfig");
  var threekey = document.getElementById("Threeconfig");
  var fourkey = document.getElementById("Fourconfig");
  var fivekey = document.getElementById("Fiveconfig");
  var sixkey = document.getElementById("Sixconfig");
  var sevenkey = document.getElementById("Sevenconfig");
  var eightkey = document.getElementById("Eightconfig");
  var ninekey = document.getElementById("Nineconfig");
  var zerokey = document.getElementById("Zeroconfig");
  var lesskey = document.getElementById("Lessconfig");
  var commahkey = document.getElementById("Commaconfig");

  var akey = document.getElementById("Aconfig");
  var  bkey= document.getElementById("Bconfig");
  var  ckey= document.getElementById("Cconfig");
  var  dkey= document.getElementById("Dconfig");
  var  ekey= document.getElementById("Econfig");
  var  fkey= document.getElementById("Fconfig");
  var  gkey= document.getElementById("Gconfig");
  var  hkey= document.getElementById("Hconfig");
  var  ikey= document.getElementById("Iconfig");
  var  jkey= document.getElementById("Jconfig");
  var  kkey= document.getElementById("Kconfig");
  var  lkey= document.getElementById("Lconfig");
  var  mkey= document.getElementById("Mconfig");
  var  nkey= document.getElementById("Nconfig");
  var  okey= document.getElementById("Oconfig");
  var  pkey= document.getElementById("Pconfig");
  var  qkey= document.getElementById("Qconfig");
  var  rkey= document.getElementById("Rconfig");
  var  skey= document.getElementById("Sconfig");
  var  tkey= document.getElementById("Tconfig");
  var  ukey= document.getElementById("Uconfig");
  var  vkey= document.getElementById("Vconfig");
  var wkey= document.getElementById("Wconfig");
  var  xkey= document.getElementById("Xconfig");
  var  ykey= document.getElementById("Yconfig");
  var  zkey= document.getElementById("Zconfig");




var r4leftkey = document.getElementById("R4leftconfig");
var r3leftkey = document.getElementById("R3leftconfig");
var r2leftkey = document.getElementById("R2leftconfig");
var r1leftkey = document.getElementById("R1leftconfig");

var r8leftkey = document.getElementById("R8leftconfig");
var r7leftkey = document.getElementById("R7leftconfig");
var r6leftkey = document.getElementById("R6leftconfig");
var r5leftkey = document.getElementById("R5leftconfig");

var r12leftkey = document.getElementById("R12leftconfig");
var r11leftkey = document.getElementById("R11leftconfig");
var r10leftkey = document.getElementById("R10leftconfig");
var r9leftkey = document.getElementById("R9leftconfig");



var r5rightkey = document.getElementById("R5rightconfig");
var r4rightkey = document.getElementById("R4rightconfig");
var r3rightkey = document.getElementById("R3rightconfig");
var r2rightkey = document.getElementById("R2rightconfig");
var r1rightkey = document.getElementById("R1rightconfig");




var e5rightkey = document.getElementById("E5rightconfig");
var e4rightkey = document.getElementById("E4rightconfig");
var e3rightkey = document.getElementById("E3rightconfig");
var e2rightkey = document.getElementById("E2rightconfig");
var e1rightkey = document.getElementById("E1rightconfig");

var e4leftkey = document.getElementById("E4leftconfig");
var e3leftkey = document.getElementById("E3leftconfig");
var e2leftkey = document.getElementById("E2leftconfig");
var e1leftkey = document.getElementById("E1leftconfig");

var e8leftkey = document.getElementById("E8leftconfig");
var e7leftkey = document.getElementById("E7leftconfig");
var e6leftkey = document.getElementById("E6leftconfig");
var e5leftkey = document.getElementById("E5leftconfig");

var e12leftkey = document.getElementById("E12leftconfig");
var e11leftkey = document.getElementById("E11leftconfig");
var e10leftkey = document.getElementById("E10leftconfig");
var e9leftkey = document.getElementById("E9leftconfig");


  }





  addEventListener("keydown", function(event) {


 if (event.metaKey && event.ctrlKey && event.which == 39 ){
  event.preventDefault();
  }

 if (event.metaKey && event.which == 39 ){
  event.preventDefault();
  }


  else if (event.which == 39 ){

  let wcatch = "Null";

  document.getElementById("functiontrigger").click();


  e5rightcatch = e12leftkey.value; e5rightkey.value = e5rightcatch;



  e12leftcatch = e11leftkey.value; e12leftkey.value = e12leftcatch;
  e11leftcatch = e10leftkey.value; e11leftkey.value = e11leftcatch;



  e10leftcatch = e9leftkey.value; e10leftkey.value = e10leftcatch;
  e9leftcatch = e8leftkey.value; e9leftkey.value = e9leftcatch;
  e8leftcatch = e7leftkey.value; e8leftkey.value = e8leftcatch;
  e7leftcatch = e6leftkey.value; e7leftkey.value = e7leftcatch;
  e6leftcatch = e5leftkey.value; e6leftkey.value = e6leftcatch;



  e5leftcatch = e4leftkey.value; e5leftkey.value = e5leftcatch;
  e4leftcatch = e3leftkey.value; e4leftkey.value = e4leftcatch;
  e3leftcatch = e2leftkey.value; e3leftkey.value = e3leftcatch;
  e2leftcatch = e1leftkey.value; e2leftkey.value = e2leftcatch;
  e1leftcatch = qkey.value; e1leftkey.value = e1leftcatch;





  qcatch = wkey.value; qbackg = wkey.style.background; qcolor = wkey.style.color; qfont = wkey.style.fontSize; qtransform = wkey.style.transform; qheight = wkey.style.height;  qmarginbottom = w.style.marginBottom;
  qkey.value = qcatch; qkey.style.color = qcolor; qkey.style.fontSize = qfont; qkey.style.transform = qtransform; qkey.style.height = qheight; qkey.style.background = qbackg;

  wcatch = ekey.value; wbackg = ekey.style.background; wcolor = ekey.style.color; wfont = ekey.style.fontSize; wtransform = ekey.style.transform; wheight = ekey.style.height;  wmarginbottom = e.style.marginBottom;
  wkey.value = wcatch; wkey.style.color = wcolor; wkey.style.fontSize = wfont; wkey.style.transform = wtransform; wkey.style.height = wheight; wkey.style.background = wbackg;

  ecatch = rkey.value; ebackg = rkey.style.background; ecolor = rkey.style.color; efont = rkey.style.fontSize; etransform = rkey.style.transform; eheight = rkey.style.height;  emarginbottom = r.style.marginBottom;
  ekey.value = ecatch; ekey.style.color = ecolor; ekey.style.fontSize = efont; ekey.style.transform = etransform; ekey.style.height = eheight; ekey.style.background = ebackg;

  rcatch = tkey.value; rbackg = tkey.style.background; rcolor = tkey.style.color; rfont = tkey.style.fontSize; rtransform = tkey.style.transform; rheight = tkey.style.height;  rmarginbottom = t.style.marginBottom;
  rkey.value = rcatch; rkey.style.color = rcolor; rkey.style.fontSize = rfont; rkey.style.transform = rtransform; rkey.style.height = rheight; rkey.style.background = rbackg;


  tcatch = ykey.value; tbackg = ykey.style.background; tcolor = ykey.style.color; tfont = ykey.style.fontSize; ttransform = ykey.style.transform; theight = ykey.style.height;  tmarginbottom = y.style.marginBottom;
  tkey.value = tcatch; tkey.style.color = tcolor; tkey.style.fontSize = tfont; tkey.style.transform = ttransform; tkey.style.height = theight; tkey.style.background = tbackg;


  ycatch = ukey.value; ybackg = ukey.style.background; ycolor = ukey.style.color; yfont = ukey.style.fontSize; ytransform = ukey.style.transform; yheight = ukey.style.height;  ymarginbottom = u.style.marginBottom;
  ykey.value = ycatch; ykey.style.color = ycolor; ykey.style.fontSize = yfont; ykey.style.transform = ytransform; ykey.style.height = yheight; ykey.style.background = ybackg;

  ucatch = ikey.value; ubackg = ikey.style.background; ucolor = ikey.style.color; ufont = ikey.style.fontSize; utransform = ikey.style.transform; uheight = ikey.style.height;  umarginbottom = i.style.marginBottom;
  ukey.value = ucatch; ukey.style.color = ucolor; ukey.style.fontSize = ufont; ukey.style.transform = utransform; ukey.style.height = uheight; ukey.style.background = ubackg;


  icatch = okey.value; ibackg = okey.style.background; icolor = okey.style.color; ifont = okey.style.fontSize; itransform = okey.style.transform; iheight = okey.style.height;  imarginbottom = o.style.marginBottom;
  ikey.value = icatch; ikey.style.color = icolor; ikey.style.fontSize = ifont; ikey.style.transform = itransform; ikey.style.height = iheight; ikey.style.background = ibackg;



  ocatch = pkey.value; obackg = pkey.style.background; ocolor = pkey.style.color; ofont = pkey.style.fontSize; otransform = pkey.style.transform; oheight = pkey.style.height;  omarginbottom = p.style.marginBottom;
  okey.value = ocatch; okey.style.color = ocolor; okey.style.fontSize = ofont; okey.style.transform = otransform; okey.style.height = oheight; okey.style.background = obackg;


  pcatch = openbracketkey.value; pbackg = openbracketkey.style.background; pcolor = openbracketkey.style.color; pfont = openbracketkey.style.fontSize; ptransform = openbracketkey.style.transform; pheight = openbracketkey.style.height;  pmarginbottom = openbracket.style.marginBottom;
  pkey.value = pcatch; pkey.style.color = pcolor; pkey.style.fontSize = pfont; pkey.style.transform = ptransform; pkey.style.height = pheight; pkey.style.background = pbackg;

  openbracketcatch = closedbracketkey.value; openbracketbackg = closedbracketkey.style.background; openbracketcolor = closedbracketkey.style.color; openbracketfont = closedbracketkey.style.fontSize; openbrackettransform = closedbracketkey.style.transform; openbracketheight = closedbracketkey.style.height;  openbracketmarginbottom = closedbracket.style.marginBottom;
  openbracketkey.value = openbracketcatch; openbracketkey.style.color = openbracketcolor; openbracketkey.style.fontSize = openbracketfont; openbracketkey.style.transform = openbrackettransform; openbracketkey.style.height = openbracketheight; openbracketkey.style.background = openbracketbackg;

  closedbracketcatch = backslashkey.value; closedbracketbackg = backslashkey.style.background; closedbracketcolor = backslashkey.style.color; closedbracketfont = backslashkey.style.fontSize; closedbrackettransform = backslashkey.style.transform; closedbracketheight = backslashkey.style.height;  closedbracketmarginbottom = backslash.style.marginBottom;
  closedbracketkey.value = closedbracketcatch; closedbracketkey.style.color = closedbracketcolor; closedbracketkey.style.fontSize = closedbracketfont; closedbracketkey.style.transform = closedbrackettransform; closedbracketkey.style.height = closedbracketheight; closedbracketkey.style.background = closedbracketbackg;



  backslashcatch = e1rightkey.value; backslashbackg = e1rightkey.style.background; backslashcolor = e1rightkey.style.color; backslashfont = e1rightkey.style.fontSize; backslashtransform = e1rightkey.style.transform; backslashheight = e1rightkey.style.height;  backslashmarginbottom = e1right.style.marginBottom;
  backslashkey.value = backslashcatch; backslashkey.style.color = backslashcolor; backslashkey.style.fontSize = backslashfont; backslashkey.style.transform = backslashtransform; backslashkey.style.height = backslashheight; backslashkey.style.background = backslashbackg;

  if(closedbracketkey.value.indexOf("maj7")>0||pkey.value.indexOf("maj7")>0){if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"maj7");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"maj7");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"maj7");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"maj7");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"maj7");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"maj7");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"maj7");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"maj7");}}else if(closedbracketkey.value.indexOf("dom7")>0||pkey.value.indexOf("dom7")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"dom7");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"dom7");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"dom7");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"dom7");}else if(e1rightkey.value.indexOf("dim7")>0||pkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"dom7");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"dom7");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"dom7");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"dom7");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"dom7");}}else if(closedbracketkey.value.indexOf("dim7")>0||pkey.value.indexOf("dim7")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"dim7");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"dim7");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"dim7");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"dim7");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"dim7");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"dim7");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"dim7");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"dim7");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"dim7");}}else if(closedbracketkey.value.indexOf("dim")>0||pkey.value.indexOf("dim")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"dim");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"dim");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"dim");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"dim");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"dim");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"dim");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"dim");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"dim");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"dim");}}else if(closedbracketkey.value.indexOf("aug7")>0||pkey.value.indexOf("aug7")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"aug7");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"aug7");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"aug7");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"aug7");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"aug7");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"aug7");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"aug7");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"aug7");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"aug7");}}else if(closedbracketkey.value.indexOf("min7")>0||pkey.value.indexOf("min7")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"min7");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"min7");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"min7");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"min7");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"min7");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"min7");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"min7");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"min7");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"min7");}}else if(closedbracketkey.value.indexOf("min")>0||pkey.value.indexOf("min")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"min");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"min");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"min");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"min");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"min");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"min");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"min");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"min");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"min");}}else if(closedbracketkey.value.indexOf("aug")>0||pkey.value.indexOf("aug")>0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"aug");}else if(e1rightkey.value.indexOf("dom7")>0){backslashkey.value=e1rightkey.value.replace(dom7,"aug");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"aug");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"aug");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"aug");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"aug");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"aug");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"aug");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"aug");}}else if(closedbracketkey.value.indexOf("maj")>0&&closedbracketkey.value.indexOf("maj7")<0||pkey.value.indexOf("maj")>0&&pkey.value.indexOf("maj7")<0){if(e1rightkey.value.indexOf("maj7")>0){backslashkey.value=e1rightkey.value.replace(maj7,"maj");}else if(e1rightkey.value.indexOf("maj")>0){backslashkey.value=e1rightkey.value.replace(maj,"maj");}else if(e1rightkey.value.indexOf("aug7")>0){backslashkey.value=e1rightkey.value.replace(aug7,"maj");}else if(e1rightkey.value.indexOf("aug")>0){backslashkey.value=e1rightkey.value.replace(aug,"maj");}else if(e1rightkey.value.indexOf("dim7")>0){backslashkey.value=e1rightkey.value.replace(dim7,"maj");}else if(e1rightkey.value.indexOf("dim")>0){backslashkey.value=e1rightkey.value.replace(dim,"maj");}else if(e1rightkey.value.indexOf("min7")>0){backslashkey.value=e1rightkey.value.replace(min7,"maj");}else if(e1rightkey.value.indexOf("min")>0){backslashkey.value=e1rightkey.value.replace(min,"maj");}else if(e1rightkey.value.indexOf("maj")>0&&e1rightkey.value.indexOf("maj7")<1){backslashkey.value=e1rightkey.value.replace(maj,"maj");}}


  e1rightcatch = e2rightkey.value; e1rightkey.value = e1rightcatch;
  e2rightcatch = e3rightkey.value; e2rightkey.value = e2rightcatch;
  e3rightcatch = e4rightkey.value; e3rightkey.value = e3rightcatch;

  e4rightcatch = e5rightkey.value; e4rightkey.value = e4rightcatch;





  r12leftcatch = r11leftkey.value; r12leftkey.value = r12leftcatch;
  r11leftcatch = r10leftkey.value; r11leftkey.value = r11leftcatch;



  r10leftcatch = r9leftkey.value; r10leftkey.value = r10leftcatch;
  r9leftcatch = r8leftkey.value; r9leftkey.value = r9leftcatch;
  r8leftcatch = r7leftkey.value; r8leftkey.value = r8leftcatch;
  r7leftcatch = r6leftkey.value; r7leftkey.value = r7leftcatch;
  r6leftcatch = r5leftkey.value; r6leftkey.value = r6leftcatch;



  r5leftcatch = r4leftkey.value; r5leftkey.value = r5leftcatch;
  r4leftcatch = r3leftkey.value; r4leftkey.value = r4leftcatch;
  r3leftcatch = r2leftkey.value; r3leftkey.value = r3leftcatch;
  r2leftcatch = r1leftkey.value; r2leftkey.value = r2leftcatch;
  r1leftcatch = tickkey.value; r1leftkey.value = r1leftcatch;






  tickcatch = onekey.value; tickbackg = onekey.style.background; tickcolor = onekey.style.color; tickfont = onekey.style.fontSize; ticktransform = onekey.style.transform; tickheight = onekey.style.height;  tickmarginbottom = one.style.marginBottom;
  tickkey.value = tickcatch; tickkey.style.color = tickcolor; tickkey.style.fontSize = tickfont; tickkey.style.transform = ticktransform; tickkey.style.height = tickheight; tickkey.style.background = tickbackg;


  onecatch = twokey.value; onebackg = twokey.style.background; onecolor = twokey.style.color; onefont = twokey.style.fontSize; onetransform = twokey.style.transform; oneheight = twokey.style.height;  onemarginbottom = two.style.marginBottom;
  onekey.value = onecatch; onekey.style.color = onecolor; onekey.style.fontSize = onefont; onekey.style.transform = onetransform; onekey.style.height = oneheight; onekey.style.background = onebackg;

  twocatch = threekey.value; twobackg = threekey.style.background; twocolor = threekey.style.color; twofont = threekey.style.fontSize; twotransform = threekey.style.transform; twoheight = threekey.style.height;  twomarginbottom = three.style.marginBottom;
  twokey.value = twocatch; twokey.style.color = twocolor; twokey.style.fontSize = twofont; twokey.style.transform = twotransform; twokey.style.height = twoheight; twokey.style.background = twobackg;

  threecatch = fourkey.value; threebackg = fourkey.style.background; threecolor = fourkey.style.color; threefont = fourkey.style.fontSize; threetransform = fourkey.style.transform; threeheight = fourkey.style.height;  threemarginbottom = four.style.marginBottom;
  threekey.value = threecatch; threekey.style.color = threecolor; threekey.style.fontSize = threefont; threekey.style.transform = threetransform; threekey.style.height = threeheight; threekey.style.background = threebackg;

  fourcatch = fivekey.value; fourbackg = fivekey.style.background; fourcolor = fivekey.style.color; fourfont = fivekey.style.fontSize; fourtransform = fivekey.style.transform; fourheight = fivekey.style.height;  fourmarginbottom = five.style.marginBottom;
  fourkey.value = fourcatch; fourkey.style.color = fourcolor; fourkey.style.fontSize = fourfont; fourkey.style.transform = fourtransform; fourkey.style.height = fourheight; fourkey.style.background = fourbackg;

  fivecatch = sixkey.value; fivebackg = sixkey.style.background; fivecolor = sixkey.style.color; fivefont = sixkey.style.fontSize; fivetransform = sixkey.style.transform; fiveheight = sixkey.style.height;  fivemarginbottom = six.style.marginBottom;
  fivekey.value = fivecatch; fivekey.style.color = fivecolor; fivekey.style.fontSize = fivefont; fivekey.style.transform = fivetransform; fivekey.style.height = fiveheight; fivekey.style.background = fivebackg;

  sixcatch = sevenkey.value; sixbackg = sevenkey.style.background; sixcolor = sevenkey.style.color; sixfont = sevenkey.style.fontSize; sixtransform = sevenkey.style.transform; sixheight = sevenkey.style.height;  sixmarginbottom = seven.style.marginBottom;
  sixkey.value = sixcatch; sixkey.style.color = sixcolor; sixkey.style.fontSize = sixfont; sixkey.style.transform = sixtransform; sixkey.style.height = sixheight; sixkey.style.background = sixbackg;

  sevencatch = eightkey.value; sevenbackg = eightkey.style.background; sevencolor = eightkey.style.color; sevenfont = eightkey.style.fontSize; seventransform = eightkey.style.transform; sevenheight = eightkey.style.height;  sevenmarginbottom = eight.style.marginBottom;
  sevenkey.value = sevencatch; sevenkey.style.color = sevencolor; sevenkey.style.fontSize = sevenfont; sevenkey.style.transform = seventransform; sevenkey.style.height = sevenheight; sevenkey.style.background = sevenbackg;


  eightcatch = ninekey.value; eightbackg = ninekey.style.background; eightcolor = ninekey.style.color; eightfont = ninekey.style.fontSize; eighttransform = ninekey.style.transform; eightheight = ninekey.style.height;  eightmarginbottom = nine.style.marginBottom;
  eightkey.value = eightcatch; eightkey.style.color = eightcolor; eightkey.style.fontSize = eightfont; eightkey.style.transform = eighttransform; eightkey.style.height = eightheight; eightkey.style.background = eightbackg;

  ninecatch = zerokey.value; ninebackg = zerokey.style.background; ninecolor = zerokey.style.color; ninefont = zerokey.style.fontSize; ninetransform = zerokey.style.transform; nineheight = zerokey.style.height;  ninemarginbottom = zero.style.marginBottom;
  ninekey.value = ninecatch; ninekey.style.color = ninecolor; ninekey.style.fontSize = ninefont; ninekey.style.transform = ninetransform; ninekey.style.height = nineheight; ninekey.style.background = ninebackg;


  zerocatch = lesskey.value; zerobackg = lesskey.style.background; zerocolor = lesskey.style.color; zerofont = lesskey.style.fontSize; zerotransform = lesskey.style.transform; zeroheight = lesskey.style.height;  zeromarginbottom = less.style.marginBottom;
  zerokey.value = zerocatch; zerokey.style.color = zerocolor; zerokey.style.fontSize = zerofont; zerokey.style.transform = zerotransform; zerokey.style.height = zeroheight; zerokey.style.background = zerobackg;


  lesscatch = equalskey.value; lessbackg = equalskey.style.background; lesscolor = equalskey.style.color; lessfont = equalskey.style.fontSize; lesstransform = equalskey.style.transform; lessheight = equalskey.style.height;  lessmarginbottom = equals.style.marginBottom;
  lesskey.value = lesscatch; lesskey.style.color = lesscolor; lesskey.style.fontSize = lessfont; lesskey.style.transform = lesstransform; lesskey.style.height = lessheight; lesskey.style.background = lessbackg;

  equalscatch = r1rightkey.value; equalsbackg = r1rightkey.style.background; equalscolor = r1rightkey.style.color; equalsfont = r1rightkey.style.fontSize; equalstransform = r1rightkey.style.transform;
  equalskey.value = equalscatch; equalskey.style.color = equalscolor; equalskey.style.fontSize = equalsfont; equalskey.style.transform = equalstransform; equalskey.style.background = equalsbackg;

  if(lesskey.value.indexOf("maj7")>0||ninekey.value.indexOf("maj7")>0){if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"maj7");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"maj7");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"maj7");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"maj7");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"maj7");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"maj7");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"maj7");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"maj7");}}else if(lesskey.value.indexOf("dom7")>0||ninekey.value.indexOf("dom7")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"dom7");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"dom7");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"dom7");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"dom7");}else if(r1rightkey.value.indexOf("dim7")>0||ninekey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"dom7");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"dom7");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"dom7");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"dom7");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"dom7");}}else if(lesskey.value.indexOf("dim7")>0||ninekey.value.indexOf("dim7")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"dim7");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"dim7");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"dim7");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"dim7");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"dim7");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"dim7");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"dim7");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"dim7");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"dim7");}}else if(lesskey.value.indexOf("dim")>0||ninekey.value.indexOf("dim")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"dim");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"dim");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"dim");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"dim");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"dim");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"dim");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"dim");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"dim");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"dim");}}else if(lesskey.value.indexOf("aug7")>0||ninekey.value.indexOf("aug7")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"aug7");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"aug7");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"aug7");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"aug7");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"aug7");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"aug7");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"aug7");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"aug7");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"aug7");}}else if(lesskey.value.indexOf("min7")>0||ninekey.value.indexOf("min7")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"min7");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"min7");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"min7");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"min7");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"min7");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"min7");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"min7");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"min7");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"min7");}}else if(lesskey.value.indexOf("min")>0||ninekey.value.indexOf("min")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"min");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"min");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"min");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"min");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"min");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"min");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"min");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"min");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"min");}}else if(lesskey.value.indexOf("aug")>0||ninekey.value.indexOf("aug")>0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"aug");}else if(r1rightkey.value.indexOf("dom7")>0){equalskey.value=r1rightkey.value.replace(dom7,"aug");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"aug");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"aug");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"aug");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"aug");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"aug");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"aug");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"aug");}}else if(lesskey.value.indexOf("maj")>0&&lesskey.value.indexOf("maj7")<0||ninekey.value.indexOf("maj")>0&&ninekey.value.indexOf("maj7")<0){if(r1rightkey.value.indexOf("maj7")>0){equalskey.value=r1rightkey.value.replace(maj7,"maj");}else if(r1rightkey.value.indexOf("maj")>0){equalskey.value=r1rightkey.value.replace(maj,"maj");}else if(r1rightkey.value.indexOf("aug7")>0){equalskey.value=r1rightkey.value.replace(aug7,"maj");}else if(r1rightkey.value.indexOf("aug")>0){equalskey.value=r1rightkey.value.replace(aug,"maj");}else if(r1rightkey.value.indexOf("dim7")>0){equalskey.value=r1rightkey.value.replace(dim7,"maj");}else if(r1rightkey.value.indexOf("dim")>0){equalskey.value=r1rightkey.value.replace(dim,"maj");}else if(r1rightkey.value.indexOf("min7")>0){equalskey.value=r1rightkey.value.replace(min7,"maj");}else if(r1rightkey.value.indexOf("min")>0){equalskey.value=r1rightkey.value.replace(min,"maj");}else if(r1rightkey.value.indexOf("maj")>0&&r1rightkey.value.indexOf("maj7")<1){equalskey.value=r1rightkey.value.replace(maj,"maj");}}



r1rightcatch = r2rightkey.value; r1rightkey.value = r1rightcatch;

r2rightcatch = r3rightkey.value; r2rightkey.value = r2rightcatch;
r3rightcatch = r4rightkey.value; r3rightkey.value = r3rightcatch;
r4rightcatch = r5rightkey.value; r4rightkey.value = r4rightcatch;
r5rightcatch = r12leftkey.value; r5rightkey.value = r5rightcatch;










  if (document.getElementById('instrument').value == "tones") {
  a.src = ("tones" + "/" + akey.value + ".mp3");
  b.src = ("tones" + "/" + bkey.value + ".mp3");
  c.src = ("tones" + "/" + ckey.value + ".mp3");
  d.src = ("tones" + "/" + dkey.value + ".mp3");
  e.src = ("tones" + "/" + ekey.value + ".mp3");
  f.src = ("tones" + "/" + fkey.value + ".mp3");
  g.src = ("tones" + "/" + gkey.value + ".mp3");
  h.src = ("tones" + "/" + hkey.value + ".mp3");
  i.src = ("tones" + "/" + ikey.value + ".mp3");
  j.src = ("tones" + "/" + jkey.value + ".mp3");
  k.src = ("tones" + "/" + kkey.value + ".mp3");
  l.src = ("tones" + "/" + lkey.value + ".mp3");
  m.src = ("tones" + "/" + mkey.value + ".mp3");
  n.src = ("tones" + "/" + nkey.value + ".mp3");
  o.src = ("tones" + "/" + okey.value + ".mp3");
  p.src = ("tones" + "/" + pkey.value + ".mp3");
  q.src = ("tones" + "/" + qkey.value + ".mp3");
  r.src = ("tones" + "/" + rkey.value + ".mp3");
  s.src = ("tones" + "/" + skey.value + ".mp3");
  t.src = ("tones" + "/" + tkey.value + ".mp3");
  u.src = ("tones" + "/" + ukey.value + ".mp3");
  v.src = ("tones" + "/" + vkey.value + ".mp3");
  w.src = ("tones" + "/" + wkey.value + ".mp3");
  x.src = ("tones" + "/" + xkey.value + ".mp3");
  y.src = ("tones" + "/" + ykey.value + ".mp3");
  z.src = ("tones" + "/" + zkey.value + ".mp3");



  quote.src = ("tones" + "/" + quotekey.value + ".mp3");
  semicolon.src = ("tones" + "/" + semicolonkey.value + ".mp3");
  punkt.src = ("tones" + "/" + punktkey.value + ".mp3");
  slash.src = ("tones" + "/" + slashkey.value + ".mp3");
  backslash.src = ("tones" + "/" + backslashkey.value + ".mp3");
  equals.src = ("tones" + "/" + equalskey.value + ".mp3");
  openbracket.src = ("tones" + "/" + openbracketkey.value + ".mp3");
  closedbracket.src = ("tones" + "/" + closedbracketkey.value + ".mp3");




  tick.src = ("tones" + "/" + tickkey.value + ".mp3");
  one.src = ("tones" + "/" + onekey.value + ".mp3");
  two.src = ("tones" + "/" + twokey.value + ".mp3");
  three.src = ("tones" + "/" + threekey.value + ".mp3");
  four.src = ("tones" + "/" + fourkey.value + ".mp3");
  five.src = ("tones" + "/" + fivekey.value + ".mp3");
  six.src = ("tones" + "/" + sixkey.value + ".mp3");
  seven.src = ("tones" + "/" + sevenkey.value + ".mp3");
  eight.src = ("tones" + "/" + eightkey.value + ".mp3");
  nine.src = ("tones" + "/" + ninekey.value + ".mp3");
  zero.src = ("tones" + "/" + zerokey.value + ".mp3");
  less.src = ("tones" + "/" + lesskey.value + ".mp3");
  commah.src = ("tones" + "/" + commahkey.value + ".mp3");
  }
  if (document.getElementById('instrument').value == "detunedorgan") {
  a.src = ("detunedorgan" + "/" + akey.value + ".mp3");
  b.src = ("detunedorgan" + "/" + bkey.value + ".mp3");
  c.src = ("detunedorgan" + "/" + ckey.value + ".mp3");
  d.src = ("detunedorgan" + "/" + dkey.value + ".mp3");
  e.src = ("detunedorgan" + "/" + ekey.value + ".mp3");
  f.src = ("detunedorgan" + "/" + fkey.value + ".mp3");
  g.src = ("detunedorgan" + "/" + gkey.value + ".mp3");
  h.src = ("detunedorgan" + "/" + hkey.value + ".mp3");
  i.src = ("detunedorgan" + "/" + ikey.value + ".mp3");
  j.src = ("detunedorgan" + "/" + jkey.value + ".mp3");
  k.src = ("detunedorgan" + "/" + kkey.value + ".mp3");
  l.src = ("detunedorgan" + "/" + lkey.value + ".mp3");
  m.src = ("detunedorgan" + "/" + mkey.value + ".mp3");
  n.src = ("detunedorgan" + "/" + nkey.value + ".mp3");
  o.src = ("detunedorgan" + "/" + okey.value + ".mp3");
  p.src = ("detunedorgan" + "/" + pkey.value + ".mp3");
  q.src = ("detunedorgan" + "/" + qkey.value + ".mp3");
  r.src = ("detunedorgan" + "/" + rkey.value + ".mp3");
  s.src = ("detunedorgan" + "/" + skey.value + ".mp3");
  t.src = ("detunedorgan" + "/" + tkey.value + ".mp3");
  u.src = ("detunedorgan" + "/" + ukey.value + ".mp3");
  v.src = ("detunedorgan" + "/" + vkey.value + ".mp3");
  w.src = ("detunedorgan" + "/" + wkey.value + ".mp3");
  x.src = ("detunedorgan" + "/" + xkey.value + ".mp3");
  y.src = ("detunedorgan" + "/" + ykey.value + ".mp3");
  z.src = ("detunedorgan" + "/" + zkey.value + ".mp3");



  quote.src = ("detunedorgan" + "/" + quotekey.value + ".mp3");
  semicolon.src = ("detunedorgan" + "/" + semicolonkey.value + ".mp3");
  punkt.src = ("detunedorgan" + "/" + punktkey.value + ".mp3");
  slash.src = ("detunedorgan" + "/" + slashkey.value + ".mp3");
  backslash.src = ("detunedorgan" + "/" + backslashkey.value + ".mp3");
  equals.src = ("detunedorgan" + "/" + equalskey.value + ".mp3");
  openbracket.src = ("detunedorgan" + "/" + openbracketkey.value + ".mp3");
  closedbracket.src = ("detunedorgan" + "/" + closedbracketkey.value + ".mp3");


  tick.src = ("detunedorgan" + "/" + tickkey.value + ".mp3");
  one.src = ("detunedorgan" + "/" + onekey.value + ".mp3");
  two.src = ("detunedorgan" + "/" + twokey.value + ".mp3");
  three.src = ("detunedorgan" + "/" + threekey.value + ".mp3");
  four.src = ("detunedorgan" + "/" + fourkey.value + ".mp3");
  five.src = ("detunedorgan" + "/" + fivekey.value + ".mp3");
  six.src = ("detunedorgan" + "/" + sixkey.value + ".mp3");
  seven.src = ("detunedorgan" + "/" + sevenkey.value + ".mp3");
  eight.src = ("detunedorgan" + "/" + eightkey.value + ".mp3");
  nine.src = ("detunedorgan" + "/" + ninekey.value + ".mp3");
  zero.src = ("detunedorgan" + "/" + zerokey.value + ".mp3");
  less.src = ("detunedorgan" + "/" + lesskey.value + ".mp3");
  commah.src = ("detunedorgan" + "/" + commahkey.value + ".mp3");
  }


  }
  });






  // Test

  //important



  addEventListener("keydown", function(event) {
  var wkey= document.getElementById("Wconfig");
  var w= document.getElementById("w");

  if (event.metaKey && event.ctrlKey && event.which == 37 ){
  event.preventDefault();
  }


  else if (event.which == 37){


  document.getElementById("functiontrigger").click();

  document.getElementById('ticktrigger').click();
  document.getElementById('atrigger').click();
  document.getElementById('qtrigger').click();
  document.getElementById('e1lefttrigger').click();
  document.getElementById('ztrigger').click();




  r12leftcatch = r5rightkey.value; r12leftkey.value = r12leftcatch;

  r5rightcatch = r4rightkey.value;
  r5rightkey.value = r5rightcatch;



  r4rightcatch = r3rightkey.value;
  r4rightkey.value = r4rightcatch;

  r3rightcatch = r2rightkey.value;
  r3rightkey.value = r3rightcatch;

r2rightcatch = r1rightkey.value;
r2rightkey.value = r2rightcatch;

r1rightcatch = equalskey.value;
r1rightkey.value = r1rightcatch;


  equalscatch = lesskey.value; equalsbackg = lesskey.style.background; equalscolor = lesskey.style.color; equalsfont = lesskey.style.fontSize; equalstransform = lesskey.style.transform; equalsheight = lesskey.style.height;  equalsmarginbottom = less.style.marginBottom;
  equalskey.value = equalscatch; equalskey.style.color = equalscolor; equalskey.style.fontSize = equalsfont; equalskey.style.transform = equalstransform; equalskey.style.height = equalsheight; equalskey.style.background = equalsbackg;


  lesscatch = zerokey.value; lessbackg = zerokey.style.background; lesscolor = zerokey.style.color; lessfont = zerokey.style.fontSize; lesstransform = zerokey.style.transform; lessheight = zerokey.style.height;  lessmarginbottom = zero.style.marginBottom;
  lesskey.value = lesscatch; lesskey.style.color = lesscolor; lesskey.style.fontSize = lessfont; lesskey.style.transform = lesstransform; lesskey.style.height = lessheight; lesskey.style.background = lessbackg;

  zerocatch = ninekey.value; zerobackg = ninekey.style.background; zerocolor = ninekey.style.color; zerofont = ninekey.style.fontSize; zerotransform = ninekey.style.transform; zeroheight = ninekey.style.height;  zeromarginbottom = nine.style.marginBottom;
  zerokey.value = zerocatch; zerokey.style.color = zerocolor; zerokey.style.fontSize = zerofont; zerokey.style.transform = zerotransform; zerokey.style.height = zeroheight; zerokey.style.background = zerobackg;


  ninecatch = eightkey.value; ninebackg = eightkey.style.background; ninecolor = eightkey.style.color; ninefont = eightkey.style.fontSize; ninetransform = eightkey.style.transform; nineheight = eightkey.style.height;  ninemarginbottom = eight.style.marginBottom;
  ninekey.value = ninecatch; ninekey.style.color = ninecolor; ninekey.style.fontSize = ninefont; ninekey.style.transform = ninetransform; ninekey.style.height = nineheight; ninekey.style.background = ninebackg;

  eightcatch = sevenkey.value; eightbackg = sevenkey.style.background; eightcolor = sevenkey.style.color; eightfont = sevenkey.style.fontSize; eighttransform = sevenkey.style.transform; eightheight = sevenkey.style.height;  eightmarginbottom = seven.style.marginBottom;
  eightkey.value = eightcatch; eightkey.style.color = eightcolor; eightkey.style.fontSize = eightfont; eightkey.style.transform = eighttransform; eightkey.style.height = eightheight; eightkey.style.background = eightbackg;


  sevencatch = sixkey.value; sevenbackg = sixkey.style.background; sevencolor = sixkey.style.color; sevenfont = sixkey.style.fontSize; seventransform = sixkey.style.transform; sevenheight = sixkey.style.height;  sevenmarginbottom = six.style.marginBottom;
  sevenkey.value = sevencatch; sevenkey.style.color = sevencolor; sevenkey.style.fontSize = sevenfont; sevenkey.style.transform = seventransform; sevenkey.style.height = sevenheight; sevenkey.style.background = sevenbackg;


  sixcatch = fivekey.value; sixbackg = fivekey.style.background; sixcolor = fivekey.style.color; sixfont = fivekey.style.fontSize; sixtransform = fivekey.style.transform; sixheight = fivekey.style.height;  sixmarginbottom = five.style.marginBottom;
  sixkey.value = sixcatch; sixkey.style.color = sixcolor; sixkey.style.fontSize = sixfont; sixkey.style.transform = sixtransform; sixkey.style.height = sixheight; sixkey.style.background = sixbackg;

  fivecatch = fourkey.value; fivebackg = fourkey.style.background; fivecolor = fourkey.style.color; fivefont = fourkey.style.fontSize; fivetransform = fourkey.style.transform; fiveheight = fourkey.style.height;  fivemarginbottom = four.style.marginBottom;
  fivekey.value = fivecatch; fivekey.style.color = fivecolor; fivekey.style.fontSize = fivefont; fivekey.style.transform = fivetransform; fivekey.style.height = fiveheight; fivekey.style.background = fivebackg;


  fourcatch = threekey.value; fourbackg = threekey.style.background; fourcolor = threekey.style.color; fourfont = threekey.style.fontSize; fourtransform = threekey.style.transform; fourheight = threekey.style.height;  fourmarginbottom = three.style.marginBottom;
  fourkey.value = fourcatch; fourkey.style.color = fourcolor; fourkey.style.fontSize = fourfont; fourkey.style.transform = fourtransform; fourkey.style.height = fourheight; fourkey.style.background = fourbackg;

  threecatch = twokey.value; threebackg = twokey.style.background; threecolor = twokey.style.color; threefont = twokey.style.fontSize; threetransform = twokey.style.transform; threeheight = twokey.style.height;  threemarginbottom = two.style.marginBottom;
  threekey.value = threecatch; threekey.style.color = threecolor; threekey.style.fontSize = threefont; threekey.style.transform = threetransform; threekey.style.height = threeheight; threekey.style.background = threebackg;

  twocatch = onekey.value; twobackg = onekey.style.background; twocolor = onekey.style.color; twofont = onekey.style.fontSize; twotransform = onekey.style.transform; twoheight = onekey.style.height;  twomarginbottom = one.style.marginBottom;
  twokey.value = twocatch; twokey.style.color = twocolor; twokey.style.fontSize = twofont; twokey.style.transform = twotransform; twokey.style.height = twoheight; twokey.style.background = twobackg;

  onecatch = tickkey.value; onebackg = tickkey.style.background; onecolor = tickkey.style.color; onefont = tickkey.style.fontSize; onetransform = tickkey.style.transform; oneheight = tickkey.style.height;  onemarginbottom = tick.style.marginBottom;
  onekey.value = onecatch; onekey.style.color = onecolor; onekey.style.fontSize = onefont; onekey.style.transform = onetransform; onekey.style.height = oneheight; onekey.style.background = onebackg;



  tickcatch = r1leftkey.value; tickbackg = r1leftkey.style.background; tickcolor = r1leftkey.style.color; tickfont = r1leftkey.style.fontSize; ticktransform = r1leftkey.style.transform; tickhr8left = r1leftkey.style.hr8left;  tickmarginbottom = r1left.style.marginBottom;
  tickkey.value = tickcatch; tickkey.style.color = tickcolor; tickkey.style.fontSize = tickfont; tickkey.style.transform = ticktransform; tickkey.style.hr8left = tickhr8left; tickkey.style.background = tickbackg;
  if(onekey.value.indexOf("maj7")>0||threekey.value.indexOf("maj7")>0){if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"maj7");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"maj7");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"maj7");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"maj7");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"maj7");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"maj7");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"maj7");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"maj7");}}else if(onekey.value.indexOf("dom7")>0||threekey.value.indexOf("dom7")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"dom7");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"dom7");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"dom7");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"dom7");}else if(r1leftkey.value.indexOf("dim7")>0||threekey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"dom7");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"dom7");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"dom7");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"dom7");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"dom7");}}else if(onekey.value.indexOf("dim7")>0||threekey.value.indexOf("dim7")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"dim7");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"dim7");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"dim7");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"dim7");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"dim7");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"dim7");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"dim7");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"dim7");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"dim7");}}else if(onekey.value.indexOf("dim")>0||threekey.value.indexOf("dim")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"dim");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"dim");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"dim");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"dim");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"dim");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"dim");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"dim");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"dim");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"dim");}}else if(onekey.value.indexOf("aug7")>0||threekey.value.indexOf("aug7")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"aug7");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"aug7");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"aug7");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"aug7");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"aug7");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"aug7");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"aug7");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"aug7");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"aug7");}}else if(onekey.value.indexOf("min7")>0||threekey.value.indexOf("min7")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"min7");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"min7");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"min7");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"min7");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"min7");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"min7");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"min7");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"min7");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"min7");}}else if(onekey.value.indexOf("min")>0||threekey.value.indexOf("min")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"min");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"min");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"min");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"min");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"min");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"min");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"min");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"min");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"min");}}else if(onekey.value.indexOf("aug")>0||threekey.value.indexOf("aug")>0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"aug");}else if(r1leftkey.value.indexOf("dom7")>0){tickkey.value=r1leftkey.value.replace(dom7,"aug");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"aug");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"aug");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"aug");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"aug");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"aug");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"aug");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"aug");}}else if(onekey.value.indexOf("maj")>0&&onekey.value.indexOf("maj7")<0||threekey.value.indexOf("maj")>0&&threekey.value.indexOf("maj7")<0){if(r1leftkey.value.indexOf("maj7")>0){tickkey.value=r1leftkey.value.replace(maj7,"maj");}else if(r1leftkey.value.indexOf("maj")>0){tickkey.value=r1leftkey.value.replace(maj,"maj");}else if(r1leftkey.value.indexOf("aug7")>0){tickkey.value=r1leftkey.value.replace(aug7,"maj");}else if(r1leftkey.value.indexOf("aug")>0){tickkey.value=r1leftkey.value.replace(aug,"maj");}else if(r1leftkey.value.indexOf("dim7")>0){tickkey.value=r1leftkey.value.replace(dim7,"maj");}else if(r1leftkey.value.indexOf("dim")>0){tickkey.value=r1leftkey.value.replace(dim,"maj");}else if(r1leftkey.value.indexOf("min7")>0){tickkey.value=r1leftkey.value.replace(min7,"maj");}else if(r1leftkey.value.indexOf("min")>0){tickkey.value=r1leftkey.value.replace(min,"maj");}else if(r1leftkey.value.indexOf("maj")>0&&r1leftkey.value.indexOf("maj7")<1){tickkey.value=r1leftkey.value.replace(maj,"maj");}}



  r1leftcatch = r2leftkey.value; r1leftbackg = r2leftkey.style.background; r1leftcolor = r2leftkey.style.color; r1leftfont = r2leftkey.style.fontSize; r1lefttransform = r2leftkey.style.transform; r1lefthr8left = r2leftkey.style.hr8left;  r1leftmarginbottom = r2left.style.marginBottom;
  r1leftkey.value = r1leftcatch; r1leftkey.style.color = r1leftcolor; r1leftkey.style.fontSize = r1leftfont; r1leftkey.style.transform = r1lefttransform; r1leftkey.style.hr8left = r1lefthr8left; r1leftkey.style.background = r1leftbackg;

  r2leftcatch = r3leftkey.value; r2leftkey.value = r2leftcatch;
  r3leftcatch = r4leftkey.value; r3leftkey.value = r3leftcatch;
  r4leftcatch = r5leftkey.value; r4leftkey.value = r4leftcatch;
  r5leftcatch = r6leftkey.value; r5leftkey.value = r5leftcatch;
  r6leftcatch = r7leftkey.value; r6leftkey.value = r6leftcatch;
  r7leftcatch = r8leftkey.value; r7leftkey.value = r7leftcatch;
  r8leftcatch = r9leftkey.value; r8leftkey.value = r8leftcatch;
  r9leftcatch = r10leftkey.value; r9leftkey.value = r9leftcatch;

  r10leftcatch = r11leftkey.value; r10leftkey.value = r10leftcatch;
  r11leftcatch = r12leftkey.value; r11leftkey.value = r11leftcatch;




  e5rightcatch = e4rightkey.value; e5rightkey.value = e5rightcatch;
  e4rightcatch = e3rightkey.value; e4rightkey.value = e4rightcatch;
  e3rightcatch = e2rightkey.value; e3rightkey.value = e3rightcatch;
  e2rightcatch = e1rightkey.value; e2rightkey.value = e2rightcatch;
  e1rightcatch = backslashkey.value; e1rightkey.value = e1rightcatch;



  backslashcatch = closedbracketkey.value; backslashbackg = closedbracketkey.style.background; backslashcolor = closedbracketkey.style.color; backslashfont = closedbracketkey.style.fontSize; backslashtransform = closedbracketkey.style.transform; backslashheight = closedbracketkey.style.height;  backslashmarginbottom = closedbracket.style.marginBottom;
  backslashkey.value = backslashcatch; backslashkey.style.color = backslashcolor; backslashkey.style.fontSize = backslashfont; backslashkey.style.transform = backslashtransform; backslashkey.style.height = backslashheight; backslashkey.style.background = backslashbackg;

  closedbracketcatch = openbracketkey.value; closedbracketbackg = openbracketkey.style.background; closedbracketcolor = openbracketkey.style.color; closedbracketfont = openbracketkey.style.fontSize; closedbrackettransform = openbracketkey.style.transform; closedbracketheight = openbracketkey.style.height;  closedbracketmarginbottom = openbracket.style.marginBottom;
  closedbracketkey.value = closedbracketcatch; closedbracketkey.style.color = closedbracketcolor; closedbracketkey.style.fontSize = closedbracketfont; closedbracketkey.style.transform = closedbrackettransform; closedbracketkey.style.height = closedbracketheight; closedbracketkey.style.background = closedbracketbackg;

  openbracketcatch = pkey.value; openbracketbackg = pkey.style.background; openbracketcolor = pkey.style.color; openbracketfont = pkey.style.fontSize; openbrackettransform = pkey.style.transform; openbracketheight = pkey.style.height;  openbracketmarginbottom = p.style.marginBottom;
  openbracketkey.value = openbracketcatch; openbracketkey.style.color = openbracketcolor; openbracketkey.style.fontSize = openbracketfont; openbracketkey.style.transform = openbrackettransform; openbracketkey.style.height = openbracketheight; openbracketkey.style.background = openbracketbackg;




  pcatch = okey.value; pbackg = okey.style.background; pcolor = okey.style.color; pfont = okey.style.fontSize; ptransform = okey.style.transform; pheight = okey.style.height;  pmarginbottom = o.style.marginBottom;
  pkey.value = pcatch; pkey.style.color = pcolor; pkey.style.fontSize = pfont; pkey.style.transform = ptransform; pkey.style.height = pheight; pkey.style.background = pbackg;


  ocatch = ikey.value; obackg = ikey.style.background; ocolor = ikey.style.color; ofont = ikey.style.fontSize; otransform = ikey.style.transform; oheight = ikey.style.height;  omarginbottom = i.style.marginBottom;
  okey.value = ocatch; okey.style.color = ocolor; okey.style.fontSize = ofont; okey.style.transform = otransform; okey.style.height = oheight; okey.style.background = obackg;


  icatch = ukey.value; ibackg = ukey.style.background; icolor = ukey.style.color; ifont = ukey.style.fontSize; itransform = ukey.style.transform; iheight = ukey.style.height;  imarginbottom = u.style.marginBottom;
  ikey.value = icatch; ikey.style.color = icolor; ikey.style.fontSize = ifont; ikey.style.transform = itransform; ikey.style.height = iheight; ikey.style.background = ibackg;


  ucatch = ykey.value; ubackg = ykey.style.background; ucolor = ykey.style.color; ufont = ykey.style.fontSize; utransform = ykey.style.transform; uheight = ykey.style.height;  umarginbottom = y.style.marginBottom;
  ukey.value = ucatch; ukey.style.color = ucolor; ukey.style.fontSize = ufont; ukey.style.transform = utransform; ukey.style.height = uheight; ukey.style.background = ubackg;


  ycatch = tkey.value; ybackg = tkey.style.background; ycolor = tkey.style.color; yfont = tkey.style.fontSize; ytransform = tkey.style.transform; yheight= tkey.style.height;  ymarginbottom = t.style.marginBottom;
  ykey.value = ycatch; ykey.style.color = ycolor; ykey.style.fontSize = yfont; ykey.style.transform = ytransform; ykey.style.height = yheight; ykey.style.background = ybackg;

  tcatch = rkey.value; tbackg = rkey.style.background; tcolor = rkey.style.color; tfont = rkey.style.fontSize; ttransform = rkey.style.transform; theight = rkey.style.height;  tmarginbottom = r.style.marginBottom;
  tkey.value = tcatch; tkey.style.color = tcolor; tkey.style.fontSize = tfont; tkey.style.transform = ttransform; tkey.style.height = theight; tkey.style.background = tbackg;


  rcatch = ekey.value; rbackg = ekey.style.background; rcolor = ekey.style.color; rfont = ekey.style.fontSize; rtransform = ekey.style.transform; rheight = ekey.style.height;  rmarginbottom = e.style.marginBottom;
  rkey.value = rcatch; rkey.style.color = rcolor; rkey.style.fontSize = rfont; rkey.style.transform = rtransform; rkey.style.height = rheight; rkey.style.background = rbackg;

  ecatch = wkey.value; ebackg = wkey.style.background; ecolor = wkey.style.color; efont = wkey.style.fontSize; etransform = wkey.style.transform; eheight = wkey.style.height;  emarginbottom = w.style.marginBottom;
  ekey.value = ecatch; ekey.style.color = ecolor; ekey.style.fontSize = efont; ekey.style.transform = etransform; ekey.style.height = eheight; ekey.style.background = ebackg;

  wcatch = qkey.value; wbackg = qkey.style.background; wcolor = qkey.style.color; wfont = qkey.style.fontSize; wtransform = qkey.style.transform; wheight = qkey.style.height;  wmarginbottom = q.style.marginBottom;
  wkey.value = wcatch; wkey.style.color = wcolor; wkey.style.fontSize = wfont; wkey.style.transform = wtransform; wkey.style.height = wheight; wkey.style.background = wbackg;


  qcatch = e1leftkey.value; qbackg = e1leftkey.style.background; qcolor = e1leftkey.style.color; qfont = e1leftkey.style.fontSize; qtransform = e1leftkey.style.transform; qheight = e1leftkey.style.height;  qmarginbottom = e1left.style.marginBottom;
  qkey.value = qcatch; qkey.style.color = qcolor; qkey.style.fontSize = qfont; qkey.style.transform = qtransform; qkey.style.height = qheight; qkey.style.background = qbackg;

  if(wkey.value.indexOf("maj7")>0||rkey.value.indexOf("maj7")>0){if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"maj7");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"maj7");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"maj7");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"maj7");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"maj7");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"maj7");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"maj7");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"maj7");}}else if(wkey.value.indexOf("dom7")>0||rkey.value.indexOf("dom7")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"dom7");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"dom7");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"dom7");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"dom7");}else if(e1leftkey.value.indexOf("dim7")>0||rkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"dom7");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"dom7");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"dom7");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"dom7");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"dom7");}}else if(wkey.value.indexOf("dim7")>0||rkey.value.indexOf("dim7")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"dim7");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"dim7");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"dim7");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"dim7");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"dim7");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"dim7");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"dim7");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"dim7");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"dim7");}}else if(wkey.value.indexOf("dim")>0||rkey.value.indexOf("dim")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"dim");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"dim");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"dim");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"dim");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"dim");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"dim");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"dim");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"dim");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"dim");}}else if(wkey.value.indexOf("aug7")>0||rkey.value.indexOf("aug7")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"aug7");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"aug7");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"aug7");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"aug7");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"aug7");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"aug7");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"aug7");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"aug7");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"aug7");}}else if(wkey.value.indexOf("min7")>0||rkey.value.indexOf("min7")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"min7");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"min7");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"min7");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"min7");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"min7");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"min7");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"min7");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"min7");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"min7");}}else if(wkey.value.indexOf("min")>0||rkey.value.indexOf("min")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"min");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"min");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"min");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"min");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"min");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"min");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"min");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"min");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"min");}}else if(wkey.value.indexOf("aug")>0||rkey.value.indexOf("aug")>0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"aug");}else if(e1leftkey.value.indexOf("dom7")>0){qkey.value=e1leftkey.value.replace(dom7,"aug");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"aug");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"aug");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"aug");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"aug");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"aug");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"aug");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"aug");}}else if(wkey.value.indexOf("maj")>0&&wkey.value.indexOf("maj7")<0||rkey.value.indexOf("maj")>0&&rkey.value.indexOf("maj7")<0){if(e1leftkey.value.indexOf("maj7")>0){qkey.value=e1leftkey.value.replace(maj7,"maj");}else if(e1leftkey.value.indexOf("maj")>0){qkey.value=e1leftkey.value.replace(maj,"maj");}else if(e1leftkey.value.indexOf("aug7")>0){qkey.value=e1leftkey.value.replace(aug7,"maj");}else if(e1leftkey.value.indexOf("aug")>0){qkey.value=e1leftkey.value.replace(aug,"maj");}else if(e1leftkey.value.indexOf("dim7")>0){qkey.value=e1leftkey.value.replace(dim7,"maj");}else if(e1leftkey.value.indexOf("dim")>0){qkey.value=e1leftkey.value.replace(dim,"maj");}else if(e1leftkey.value.indexOf("min7")>0){qkey.value=e1leftkey.value.replace(min7,"maj");}else if(e1leftkey.value.indexOf("min")>0){qkey.value=e1leftkey.value.replace(min,"maj");}else if(e1leftkey.value.indexOf("maj")>0&&e1leftkey.value.indexOf("maj7")<1){qkey.value=e1leftkey.value.replace(maj,"maj");}}



  e1leftcatch = e2leftkey.value; e1leftkey.value = e1leftcatch;
  e2leftcatch = e3leftkey.value; e2leftkey.value = e2leftcatch;
  e3leftcatch = e4leftkey.value; e3leftkey.value = e3leftcatch;
  e4leftcatch = e5leftkey.value; e4leftkey.value = e4leftcatch;
  e5leftcatch = e6leftkey.value; e5leftkey.value = e5leftcatch;
  e6leftcatch = e7leftkey.value; e6leftkey.value = e6leftcatch;
  e7leftcatch = e8leftkey.value; e7leftkey.value = e7leftcatch;
  e8leftcatch = e9leftkey.value; e8leftkey.value = e8leftcatch;
  e9leftcatch = e10leftkey.value; e9leftkey.value = e9leftcatch;

  e10leftcatch = e11leftkey.value; e10leftkey.value = e10leftcatch;
  e11leftcatch = e12leftkey.value; e11leftkey.value = e11leftcatch;

  e12leftcatch = e5rightkey.value; e12leftkey.value = e12leftcatch;

  if (document.getElementById('instrument').value == "tones") {
  a.src = ("tones" + "/" + akey.value + ".mp3");
  b.src = ("tones" + "/" + bkey.value + ".mp3");
  c.src = ("tones" + "/" + ckey.value + ".mp3");
  d.src = ("tones" + "/" + dkey.value + ".mp3");
  e.src = ("tones" + "/" + ekey.value + ".mp3");
  f.src = ("tones" + "/" + fkey.value + ".mp3");
  g.src = ("tones" + "/" + gkey.value + ".mp3");
  h.src = ("tones" + "/" + hkey.value + ".mp3");
  i.src = ("tones" + "/" + ikey.value + ".mp3");
  j.src = ("tones" + "/" + jkey.value + ".mp3");
  k.src = ("tones" + "/" + kkey.value + ".mp3");
  l.src = ("tones" + "/" + lkey.value + ".mp3");
  m.src = ("tones" + "/" + mkey.value + ".mp3");
  n.src = ("tones" + "/" + nkey.value + ".mp3");
  o.src = ("tones" + "/" + okey.value + ".mp3");
  p.src = ("tones" + "/" + pkey.value + ".mp3");
  q.src = ("tones" + "/" + qkey.value + ".mp3");
  r.src = ("tones" + "/" + rkey.value + ".mp3");
  s.src = ("tones" + "/" + skey.value + ".mp3");
  t.src = ("tones" + "/" + tkey.value + ".mp3");
  u.src = ("tones" + "/" + ukey.value + ".mp3");
  v.src = ("tones" + "/" + vkey.value + ".mp3");
  w.src = ("tones" + "/" + wkey.value + ".mp3");
  x.src = ("tones" + "/" + xkey.value + ".mp3");
  y.src = ("tones" + "/" + ykey.value + ".mp3");
  z.src = ("tones" + "/" + zkey.value + ".mp3");



  quote.src = ("tones" + "/" + quotekey.value + ".mp3");
  semicolon.src = ("tones" + "/" + semicolonkey.value + ".mp3");
  punkt.src = ("tones" + "/" + punktkey.value + ".mp3");
  slash.src = ("tones" + "/" + slashkey.value + ".mp3");
  backslash.src = ("tones" + "/" + backslashkey.value + ".mp3");
  equals.src = ("tones" + "/" + equalskey.value + ".mp3");
  openbracket.src = ("tones" + "/" + openbracketkey.value + ".mp3");
  closedbracket.src = ("tones" + "/" + closedbracketkey.value + ".mp3");



  tick.src = ("tones" + "/" + tickkey.value + ".mp3");
  one.src = ("tones" + "/" + onekey.value + ".mp3");
  two.src = ("tones" + "/" + twokey.value + ".mp3");
  three.src = ("tones" + "/" + threekey.value + ".mp3");
  four.src = ("tones" + "/" + fourkey.value + ".mp3");
  five.src = ("tones" + "/" + fivekey.value + ".mp3");
  six.src = ("tones" + "/" + sixkey.value + ".mp3");
  seven.src = ("tones" + "/" + sevenkey.value + ".mp3");
  eight.src = ("tones" + "/" + eightkey.value + ".mp3");
  nine.src = ("tones" + "/" + ninekey.value + ".mp3");
  zero.src = ("tones" + "/" + zerokey.value + ".mp3");
  less.src = ("tones" + "/" + lesskey.value + ".mp3");
  commah.src = ("tones" + "/" + commahkey.value + ".mp3");
  }
  if (document.getElementById('instrument').value == "detunedorgan") {
  a.src = ("detunedorgan" + "/" + akey.value + ".mp3");
  b.src = ("detunedorgan" + "/" + bkey.value + ".mp3");
  c.src = ("detunedorgan" + "/" + ckey.value + ".mp3");
  d.src = ("detunedorgan" + "/" + dkey.value + ".mp3");
  e.src = ("detunedorgan" + "/" + ekey.value + ".mp3");
  f.src = ("detunedorgan" + "/" + fkey.value + ".mp3");
  g.src = ("detunedorgan" + "/" + gkey.value + ".mp3");
  h.src = ("detunedorgan" + "/" + hkey.value + ".mp3");
  i.src = ("detunedorgan" + "/" + ikey.value + ".mp3");
  j.src = ("detunedorgan" + "/" + jkey.value + ".mp3");
  k.src = ("detunedorgan" + "/" + kkey.value + ".mp3");
  l.src = ("detunedorgan" + "/" + lkey.value + ".mp3");
  m.src = ("detunedorgan" + "/" + mkey.value + ".mp3");
  n.src = ("detunedorgan" + "/" + nkey.value + ".mp3");
  o.src = ("detunedorgan" + "/" + okey.value + ".mp3");
  p.src = ("detunedorgan" + "/" + pkey.value + ".mp3");
  q.src = ("detunedorgan" + "/" + qkey.value + ".mp3");
  r.src = ("detunedorgan" + "/" + rkey.value + ".mp3");
  s.src = ("detunedorgan" + "/" + skey.value + ".mp3");
  t.src = ("detunedorgan" + "/" + tkey.value + ".mp3");
  u.src = ("detunedorgan" + "/" + ukey.value + ".mp3");
  v.src = ("detunedorgan" + "/" + vkey.value + ".mp3");
  w.src = ("detunedorgan" + "/" + wkey.value + ".mp3");
  x.src = ("detunedorgan" + "/" + xkey.value + ".mp3");
  y.src = ("detunedorgan" + "/" + ykey.value + ".mp3");
  z.src = ("detunedorgan" + "/" + zkey.value + ".mp3");



  quote.src = ("detunedorgan" + "/" + quotekey.value + ".mp3");
  semicolon.src = ("detunedorgan" + "/" + semicolonkey.value + ".mp3");
  punkt.src = ("detunedorgan" + "/" + punktkey.value + ".mp3");
  slash.src = ("detunedorgan" + "/" + slashkey.value + ".mp3");
  backslash.src = ("detunedorgan" + "/" + backslashkey.value + ".mp3");
  equals.src = ("detunedorgan" + "/" + equalskey.value + ".mp3");
  openbracket.src = ("detunedorgan" + "/" + openbracketkey.value + ".mp3");
  closedbracket.src = ("detunedorgan" + "/" + closedbracketkey.value + ".mp3");


  tick.src = ("detunedorgan" + "/" + tickkey.value + ".mp3");
  one.src = ("detunedorgan" + "/" + onekey.value + ".mp3");
  two.src = ("detunedorgan" + "/" + twokey.value + ".mp3");
  three.src = ("detunedorgan" + "/" + threekey.value + ".mp3");
  four.src = ("detunedorgan" + "/" + fourkey.value + ".mp3");
  five.src = ("detunedorgan" + "/" + fivekey.value + ".mp3");
  six.src = ("detunedorgan" + "/" + sixkey.value + ".mp3");
  seven.src = ("detunedorgan" + "/" + sevenkey.value + ".mp3");
  eight.src = ("detunedorgan" + "/" + eightkey.value + ".mp3");
  nine.src = ("detunedorgan" + "/" + ninekey.value + ".mp3");
  zero.src = ("detunedorgan" + "/" + zerokey.value + ".mp3");
  less.src = ("detunedorgan" + "/" + lesskey.value + ".mp3");
  commah.src = ("detunedorgan" + "/" + commahkey.value + ".mp3");
  }


  }
  });
