
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










  // Test

  //important



  addEventListener("keyup", function(event) {


  var maj7 = /maj7/gi;s
  var maj = /maj/gi;
  var min = /min/gi;
  var dim = /dim/gi;
  var aug = /aug/gi;

  var min7 = /min7/gi;
  var dom7 = /dom7/gi;
  var aug7 = /aug7/gi;
  var dim7 = /dim7/gi;

if (event.which === 13){

if (zkey.value.indexOf("maj7") > 0) {



  tickkey.value = tickkey.value.replace(maj7, "min7");
  onekey.value = onekey.value.replace(maj7, "min7");
  twokey.value = twokey.value.replace(maj7, "min7");
  threekey.value = threekey.value.replace(maj7, "min7");
  fourkey.value = fourkey.value.replace(maj7, "min7");
  fivekey.value = fivekey.value.replace(maj7, "min7");
  sixkey.value = sixkey.value.replace(maj7, "min7");
  sevenkey.value = sevenkey.value.replace(maj7, "min7");
  eightkey.value = eightkey.value.replace(maj7, "min7");
  ninekey.value = ninekey.value.replace(maj7, "min7");
  zerokey.value = zerokey.value.replace(maj7, "min7");
  lesskey.value = lesskey.value.replace(maj7, "min7");
  equalskey.value = equalskey.value.replace(maj7, "min7");
  qkey.value = qkey.value.replace(maj7, "min7");
  wkey.value = wkey.value.replace(maj7, "min7");
  ekey.value = ekey.value.replace(maj7, "min7");
  rkey.value = rkey.value.replace(maj7, "min7");
  tkey.value = tkey.value.replace(maj7, "min7");
  ykey.value = ykey.value.replace(maj7, "min7");
  ukey.value = ukey.value.replace(maj7, "min7");
  ikey.value = ikey.value.replace(maj7, "min7");
  okey.value = okey.value.replace(maj7, "min7");
  pkey.value = pkey.value.replace(maj7, "min7");
  openbracketkey.value = openbracketkey.value.replace(maj7, "min7");
  closedbracketkey.value = closedbracketkey.value.replace(maj7, "min7");
  backslashkey.value = backslashkey.value.replace(maj7, "min7");
  akey.value = akey.value.replace(maj7, "min7");
  skey.value = skey.value.replace(maj7, "min7");
  dkey.value = dkey.value.replace(maj7, "min7");
  fkey.value = fkey.value.replace(maj7, "min7");
  gkey.value = gkey.value.replace(maj7, "min7");
  hkey.value = hkey.value.replace(maj7, "min7");
  jkey.value = jkey.value.replace(maj7, "min7");
  kkey.value = kkey.value.replace(maj7, "min7");
  lkey.value = lkey.value.replace(maj7, "min7");
  semicolonkey.value = semicolonkey.value.replace(maj7, "min7");
  quotekey.value = quotekey.value.replace(maj7, "min7");
  zkey.value = zkey.value.replace(maj7, "min7");
  xkey.value = xkey.value.replace(maj7, "min7");
  ckey.value = ckey.value.replace(maj7, "min7");
  vkey.value = vkey.value.replace(maj7, "min7");
  bkey.value = bkey.value.replace(maj7, "min7");
  nkey.value = nkey.value.replace(maj7, "min7");
  mkey.value = mkey.value.replace(maj7, "min7");
  commahkey.value = commahkey.value.replace(maj7, "min7");
  punktkey.value = punktkey.value.replace(maj7, "min7");
  slashkey.value = slashkey.value.replace(maj7, "min7");

}


else if (zkey.value.indexOf("dom7") > 0){

  tickkey.value = tickkey.value.replace(dom7, "maj");
  onekey.value = onekey.value.replace(dom7, "maj");
  twokey.value = twokey.value.replace(dom7, "maj");
  threekey.value = threekey.value.replace(dom7, "maj");
  fourkey.value = fourkey.value.replace(dom7, "maj");
  fivekey.value = fivekey.value.replace(dom7, "maj");
  sixkey.value = sixkey.value.replace(dom7, "maj");
  sevenkey.value = sevenkey.value.replace(dom7, "maj");
  eightkey.value = eightkey.value.replace(dom7, "maj");
  ninekey.value = ninekey.value.replace(dom7, "maj");
  zerokey.value = zerokey.value.replace(dom7, "maj");
  lesskey.value = lesskey.value.replace(dom7, "maj");
  equalskey.value = equalskey.value.replace(dom7, "maj");
  qkey.value = qkey.value.replace(dom7, "maj");
  wkey.value = wkey.value.replace(dom7, "maj");
  ekey.value = ekey.value.replace(dom7, "maj");
  rkey.value = rkey.value.replace(dom7, "maj");
  tkey.value = tkey.value.replace(dom7, "maj");
  ykey.value = ykey.value.replace(dom7, "maj");
  ukey.value = ukey.value.replace(dom7, "maj");
  ikey.value = ikey.value.replace(dom7, "maj");
  okey.value = okey.value.replace(dom7, "maj");
  pkey.value = pkey.value.replace(dom7, "maj");
  openbracketkey.value = openbracketkey.value.replace(dom7, "maj");
  closedbracketkey.value = closedbracketkey.value.replace(dom7, "maj");
  backslashkey.value = backslashkey.value.replace(dom7, "maj");
  akey.value = akey.value.replace(dom7, "maj");
  skey.value = skey.value.replace(dom7, "maj");
  dkey.value = dkey.value.replace(dom7, "maj");
  fkey.value = fkey.value.replace(dom7, "maj");
  gkey.value = gkey.value.replace(dom7, "maj");
  hkey.value = hkey.value.replace(dom7, "maj");
  jkey.value = jkey.value.replace(dom7, "maj");
  kkey.value = kkey.value.replace(dom7, "maj");
  lkey.value = lkey.value.replace(dom7, "maj");
  semicolonkey.value = semicolonkey.value.replace(dom7, "maj");
  quotekey.value = quotekey.value.replace(dom7, "maj");
  zkey.value = zkey.value.replace(dom7, "maj");
  xkey.value = xkey.value.replace(dom7, "maj");
  ckey.value = ckey.value.replace(dom7, "maj");
  vkey.value = vkey.value.replace(dom7, "maj");
  bkey.value = bkey.value.replace(dom7, "maj");
  nkey.value = nkey.value.replace(dom7, "maj");
  mkey.value = mkey.value.replace(dom7, "maj");
  commahkey.value = commahkey.value.replace(dom7, "maj");
  punktkey.value = punktkey.value.replace(dom7, "maj");
  slashkey.value = slashkey.value.replace(dom7, "maj");

}

else if (zkey.value.indexOf("dim7") > 0) {

  tickkey.value = tickkey.value.replace(dim, "dom");
  onekey.value = onekey.value.replace(dim, "dom");
  twokey.value = twokey.value.replace(dim, "dom");
  threekey.value = threekey.value.replace(dim, "dom");
  fourkey.value = fourkey.value.replace(dim, "dom");
  fivekey.value = fivekey.value.replace(dim, "dom");
  sixkey.value = sixkey.value.replace(dim, "dom");
  sevenkey.value = sevenkey.value.replace(dim, "dom");
  eightkey.value = eightkey.value.replace(dim, "dom");
  ninekey.value = ninekey.value.replace(dim, "dom");
  zerokey.value = zerokey.value.replace(dim, "dom");
  lesskey.value = lesskey.value.replace(dim, "dom");
  equalskey.value = equalskey.value.replace(dim, "dom");
  qkey.value = qkey.value.replace(dim, "dom");
  wkey.value = wkey.value.replace(dim, "dom");
  ekey.value = ekey.value.replace(dim, "dom");
  rkey.value = rkey.value.replace(dim, "dom");
  tkey.value = tkey.value.replace(dim, "dom");
  ykey.value = ykey.value.replace(dim, "dom");
  ukey.value = ukey.value.replace(dim, "dom");
  ikey.value = ikey.value.replace(dim, "dom");
  okey.value = okey.value.replace(dim, "dom");
  pkey.value = pkey.value.replace(dim, "dom");
  openbracketkey.value = openbracketkey.value.replace(dim, "dom");
  closedbracketkey.value = closedbracketkey.value.replace(dim, "dom");
  backslashkey.value = backslashkey.value.replace(dim, "dom");
  akey.value = akey.value.replace(dim, "dom");
  skey.value = skey.value.replace(dim, "dom");
  dkey.value = dkey.value.replace(dim, "dom");
  fkey.value = fkey.value.replace(dim, "dom");
  gkey.value = gkey.value.replace(dim, "dom");
  hkey.value = hkey.value.replace(dim, "dom");
  jkey.value = jkey.value.replace(dim, "dom");
  kkey.value = kkey.value.replace(dim, "dom");
  lkey.value = lkey.value.replace(dim, "dom");
  semicolonkey.value = semicolonkey.value.replace(dim, "dom");
  quotekey.value = quotekey.value.replace(dim, "dom");
  zkey.value = zkey.value.replace(dim, "dom");
  xkey.value = xkey.value.replace(dim, "dom");
  ckey.value = ckey.value.replace(dim, "dom");
  vkey.value = vkey.value.replace(dim, "dom");
  bkey.value = bkey.value.replace(dim, "dom");
  nkey.value = nkey.value.replace(dim, "dom");
  mkey.value = mkey.value.replace(dim, "dom");
  commahkey.value = commahkey.value.replace(dim, "dom");
  punktkey.value = punktkey.value.replace(dim, "dom");
  slashkey.value = slashkey.value.replace(dim, "dom");

}

else if (zkey.value.indexOf("dim") > 0) {
  tickkey.value = tickkey.value.replace(dim, "maj7");
  onekey.value = onekey.value.replace(dim, "maj7");
  twokey.value = twokey.value.replace(dim, "maj7");
  threekey.value = threekey.value.replace(dim, "maj7");
  fourkey.value = fourkey.value.replace(dim, "maj7");
  fivekey.value = fivekey.value.replace(dim, "maj7");
  sixkey.value = sixkey.value.replace(dim, "maj7");
  sevenkey.value = sevenkey.value.replace(dim, "maj7");
  eightkey.value = eightkey.value.replace(dim, "maj7");
  ninekey.value = ninekey.value.replace(dim, "maj7");
  zerokey.value = zerokey.value.replace(dim, "maj7");
  lesskey.value = lesskey.value.replace(dim, "maj7");
  equalskey.value = equalskey.value.replace(dim, "maj7");
  qkey.value = qkey.value.replace(dim, "maj7");
  wkey.value = wkey.value.replace(dim, "maj7");
  ekey.value = ekey.value.replace(dim, "maj7");
  rkey.value = rkey.value.replace(dim, "maj7");
  tkey.value = tkey.value.replace(dim, "maj7");
  ykey.value = ykey.value.replace(dim, "maj7");
  ukey.value = ukey.value.replace(dim, "maj7");
  ikey.value = ikey.value.replace(dim, "maj7");
  okey.value = okey.value.replace(dim, "maj7");
  pkey.value = pkey.value.replace(dim, "maj7");
  openbracketkey.value = openbracketkey.value.replace(dim, "maj7");
  closedbracketkey.value = closedbracketkey.value.replace(dim, "maj7");
  backslashkey.value = backslashkey.value.replace(dim, "maj7");
  akey.value = akey.value.replace(dim, "maj7");
  skey.value = skey.value.replace(dim, "maj7");
  dkey.value = dkey.value.replace(dim, "maj7");
  fkey.value = fkey.value.replace(dim, "maj7");
  gkey.value = gkey.value.replace(dim, "maj7");
  hkey.value = hkey.value.replace(dim, "maj7");
  jkey.value = jkey.value.replace(dim, "maj7");
  kkey.value = kkey.value.replace(dim, "maj7");
  lkey.value = lkey.value.replace(dim, "maj7");
  semicolonkey.value = semicolonkey.value.replace(dim, "maj7");
  quotekey.value = quotekey.value.replace(dim, "maj7");
  zkey.value = zkey.value.replace(dim, "maj7");
  xkey.value = xkey.value.replace(dim, "maj7");
  ckey.value = ckey.value.replace(dim, "maj7");
  vkey.value = vkey.value.replace(dim, "maj7");
  bkey.value = bkey.value.replace(dim, "maj7");
  nkey.value = nkey.value.replace(dim, "maj7");
  mkey.value = mkey.value.replace(dim, "maj7");
  commahkey.value = commahkey.value.replace(dim, "maj7");
  punktkey.value = punktkey.value.replace(dim, "maj7");
  slashkey.value = slashkey.value.replace(dim, "maj7");



}

else if (document.querySelector('input').value.indexOf("maj7") < 0) {


  tickkey.value = tickkey.value.replace(aug, "dim");
  onekey.value = onekey.value.replace(aug, "dim");
  twokey.value = twokey.value.replace(aug, "dim");
  threekey.value = threekey.value.replace(aug, "dim");
  fourkey.value = fourkey.value.replace(aug, "dim");
  fivekey.value = fivekey.value.replace(aug, "dim");
  sixkey.value = sixkey.value.replace(aug, "dim");
  sevenkey.value = sevenkey.value.replace(aug, "dim");
  eightkey.value = eightkey.value.replace(aug, "dim");
  ninekey.value = ninekey.value.replace(aug, "dim");
  zerokey.value = zerokey.value.replace(aug, "dim");
  lesskey.value = lesskey.value.replace(aug, "dim");
  equalskey.value = equalskey.value.replace(aug, "dim");
  qkey.value = qkey.value.replace(aug, "dim");
  wkey.value = wkey.value.replace(aug, "dim");
  ekey.value = ekey.value.replace(aug, "dim");
  rkey.value = rkey.value.replace(aug, "dim");
  tkey.value = tkey.value.replace(aug, "dim");
  ykey.value = ykey.value.replace(aug, "dim");
  ukey.value = ukey.value.replace(aug, "dim");
  ikey.value = ikey.value.replace(aug, "dim");
  okey.value = okey.value.replace(aug, "dim");
  pkey.value = pkey.value.replace(aug, "dim");
  openbracketkey.value = openbracketkey.value.replace(aug, "dim");
  closedbracketkey.value = closedbracketkey.value.replace(aug, "dim");
  backslashkey.value = backslashkey.value.replace(aug, "dim");
  akey.value = akey.value.replace(aug, "dim");
  skey.value = skey.value.replace(aug, "dim");
  dkey.value = dkey.value.replace(aug, "dim");
  fkey.value = fkey.value.replace(aug, "dim");
  gkey.value = gkey.value.replace(aug, "dim");
  hkey.value = hkey.value.replace(aug, "dim");
  jkey.value = jkey.value.replace(aug, "dim");
  kkey.value = kkey.value.replace(aug, "dim");
  lkey.value = lkey.value.replace(aug, "dim");
  semicolonkey.value = semicolonkey.value.replace(aug, "dim");
  quotekey.value = quotekey.value.replace(aug, "dim");
  zkey.value = zkey.value.replace(aug, "dim");
  xkey.value = xkey.value.replace(aug, "dim");
  ckey.value = ckey.value.replace(aug, "dim");
  vkey.value = vkey.value.replace(aug, "dim");
  bkey.value = bkey.value.replace(aug, "dim");
  nkey.value = nkey.value.replace(aug, "dim");
  mkey.value = mkey.value.replace(aug, "dim");
  commahkey.value = commahkey.value.replace(aug, "dim");
  punktkey.value = punktkey.value.replace(aug, "dim");
  slashkey.value = slashkey.value.replace(aug, "dim");



  tickkey.value = tickkey.value.replace(min, "aug");
  onekey.value = onekey.value.replace(min, "aug");
  twokey.value = twokey.value.replace(min, "aug");
  threekey.value = threekey.value.replace(min, "aug");
  fourkey.value = fourkey.value.replace(min, "aug");
  fivekey.value = fivekey.value.replace(min, "aug");
  sixkey.value = sixkey.value.replace(min, "aug");
  sevenkey.value = sevenkey.value.replace(min, "aug");
  eightkey.value = eightkey.value.replace(min, "aug");
  ninekey.value = ninekey.value.replace(min, "aug");
  zerokey.value = zerokey.value.replace(min, "aug");
  lesskey.value = lesskey.value.replace(min, "aug");
  equalskey.value = equalskey.value.replace(min, "aug");
  qkey.value = qkey.value.replace(min, "aug");
  wkey.value = wkey.value.replace(min, "aug");
  ekey.value = ekey.value.replace(min, "aug");
  rkey.value = rkey.value.replace(min, "aug");
  tkey.value = tkey.value.replace(min, "aug");
  ykey.value = ykey.value.replace(min, "aug");
  ukey.value = ukey.value.replace(min, "aug");
  ikey.value = ikey.value.replace(min, "aug");
  okey.value = okey.value.replace(min, "aug");
  pkey.value = pkey.value.replace(min, "aug");
  openbracketkey.value = openbracketkey.value.replace(min, "aug");
  closedbracketkey.value = closedbracketkey.value.replace(min, "aug");
  backslashkey.value = backslashkey.value.replace(min, "aug");
  akey.value = akey.value.replace(min, "aug");
  skey.value = skey.value.replace(min, "aug");
  dkey.value = dkey.value.replace(min, "aug");
  fkey.value = fkey.value.replace(min, "aug");
  gkey.value = gkey.value.replace(min, "aug");
  hkey.value = hkey.value.replace(min, "aug");
  jkey.value = jkey.value.replace(min, "aug");
  kkey.value = kkey.value.replace(min, "aug");
  lkey.value = lkey.value.replace(min, "aug");
  semicolonkey.value = semicolonkey.value.replace(min, "aug");
  quotekey.value = quotekey.value.replace(min, "aug");
  zkey.value = zkey.value.replace(min, "aug");
  xkey.value = xkey.value.replace(min, "aug");
  ckey.value = ckey.value.replace(min, "aug");
  vkey.value = vkey.value.replace(min, "aug");
  bkey.value = bkey.value.replace(min, "aug");
  nkey.value = nkey.value.replace(min, "aug");
  mkey.value = mkey.value.replace(min, "aug");
  commahkey.value = commahkey.value.replace(min, "aug");
  punktkey.value = punktkey.value.replace(min, "aug");
  slashkey.value = slashkey.value.replace(min, "aug");





  tickkey.value = tickkey.value.replace(maj, "min");
  onekey.value = onekey.value.replace(maj, "min");
  twokey.value = twokey.value.replace(maj, "min");
  threekey.value = threekey.value.replace(maj, "min");
  fourkey.value = fourkey.value.replace(maj, "min");
  fivekey.value = fivekey.value.replace(maj, "min");
  sixkey.value = sixkey.value.replace(maj, "min");
  sevenkey.value = sevenkey.value.replace(maj, "min");
  eightkey.value = eightkey.value.replace(maj, "min");
  ninekey.value = ninekey.value.replace(maj, "min");
  zerokey.value = zerokey.value.replace(maj, "min");
  lesskey.value = lesskey.value.replace(maj, "min");
  equalskey.value = equalskey.value.replace(maj, "min");
  qkey.value = qkey.value.replace(maj, "min");
  wkey.value = wkey.value.replace(maj, "min");
  ekey.value = ekey.value.replace(maj, "min");
  rkey.value = rkey.value.replace(maj, "min");
  tkey.value = tkey.value.replace(maj, "min");
  ykey.value = ykey.value.replace(maj, "min");
  ukey.value = ukey.value.replace(maj, "min");
  ikey.value = ikey.value.replace(maj, "min");
  okey.value = okey.value.replace(maj, "min");
  pkey.value = pkey.value.replace(maj, "min");
  openbracketkey.value = openbracketkey.value.replace(maj, "min");
  closedbracketkey.value = closedbracketkey.value.replace(maj, "min");
  backslashkey.value = backslashkey.value.replace(maj, "min");
  akey.value = akey.value.replace(maj, "min");
  skey.value = skey.value.replace(maj, "min");
  dkey.value = dkey.value.replace(maj, "min");
  fkey.value = fkey.value.replace(maj, "min");
  gkey.value = gkey.value.replace(maj, "min");
  hkey.value = hkey.value.replace(maj, "min");
  jkey.value = jkey.value.replace(maj, "min");
  kkey.value = kkey.value.replace(maj, "min");
  lkey.value = lkey.value.replace(maj, "min");
  semicolonkey.value = semicolonkey.value.replace(maj, "min");
  quotekey.value = quotekey.value.replace(maj, "min");
  zkey.value = zkey.value.replace(maj, "min");
  xkey.value = xkey.value.replace(maj, "min");
  ckey.value = ckey.value.replace(maj, "min");
  vkey.value = vkey.value.replace(maj, "min");
  bkey.value = bkey.value.replace(maj, "min");
  nkey.value = nkey.value.replace(maj, "min");
  mkey.value = mkey.value.replace(maj, "min");
  commahkey.value = commahkey.value.replace(maj, "min");
  punktkey.value = punktkey.value.replace(maj, "min");
  slashkey.value = slashkey.value.replace(maj, "min");


}

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
