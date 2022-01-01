
// Universal Variables


  {

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

  var cello = document.getElementById("cello");
  var detunedorgan = document.getElementById("detunedorgan");
  var instrument = document.getElementById('instrument');
  var shift = document.getElementById('Shift');




  }








//For Shift Animation

        addEventListener("keydown", function(event) {

if (event.which == 16) {shift1.style.textAlign = "right"; shift2.style.textAlign = "left"; }});


addEventListener("keyup", function(event) {
  var shift = document.getElementById('shift1');
  setTimeout(endShift, 10)
  function endShift() {
if (event.which == 16) {shift1.style.textAlign = "left"; shift2.style.textAlign = "right";}}
});








//For Capslock

function capCheck() {




var caps = document.getElementById("Caps");
document.addEventListener("load", function(event) {
if (event.getModifierState("CapsLock")) {
caps.style.background = "rgba(100, 20, 150, 1)";
}
  else if  (caps.style.background !== "rgba(60, 60, 550, 1)") {
  caps.style.background = "";
  }});

addEventListener("keydown", function(event) {
if (event.getModifierState("CapsLock")) {

caps.style.background = "rgba(100, 20, 150, 1)";
}


  else if  (caps.style.background !== "rgba(60, 60, 550, 1)") {

  caps.style.background = "";
  }

});

var caps = document.getElementById("Caps");
addEventListener("keyup", function(event) {



if (event.getModifierState("CapsLock")) {

caps.style.background = "rgba(100, 20, 150, 1)";
}


  else if  (caps.style.background !== "rgba(60, 60, 550, 1)") {

  caps.style.background = "";
  }

});



}























        addEventListener("keydown", function(event) {


        if (event.which == 32 && event.shiftKey) {

      if (cello.checked === true) {
        cello.checked = false;
        detunedorgan.checked = true;

      document.getElementById("detunedorgan").click();
      shift.value = "Detuned Organ";
      }

        else  if (detunedorgan.checked = true) {
        detunedorgan.checked = false;
        cello.checked = true;

        document.getElementById("cello").click();
        shift.value = "Cello";
        }
        }
        }
        );











// Test

//important
