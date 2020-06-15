var r = document.getElementById("ahora_si_jsjsjs");

var a;
var b;
var c;
var d;

var text = document.getElementById("ahora_si_jsjsjs");
var text2 = document.getElementById("arco_coseno");

var a1 = document.getElementById("a");
var b1 = document.getElementById("b");
var c1 = document.getElementById("c");
var d1 = document.getElementById("cos_a");

var boton = document.getElementById("retirar");
boton.addEventListener("click", retirar_dinero);

var resultado;



//    resultado = ((b2 + c2 - a2) / (2 * b * c))

    //text2.innerHTML = "arco coseno :" + (Math.acos(resultado) * 57.2958);

function retirar_dinero()
{
  a = parseFloat(a1.value);
  b = parseFloat(b1.value);
  c = parseFloat(c1.value);
  d = parseFloat(d1.value);

  var a2 = Math.pow(a, 2);
  var b2 = Math.pow(b, 2);
  var c2 = Math.pow(c, 2);

  //resultado = Math.sqrt(b2c2 - bc);

  var coseno = Math.cos(d * 0.0174533 / 1.00000042858);

if (d == 0)
{
  resultado = ((b2 + c2 - a2) / (2 * b * c))

  text2.innerHTML = "arco coseno :" + (Math.acos(resultado) * 57.2958);
}
  if (a == 0)
  {
    var b2c2 = b2 + c2; //3049
    var bc = 2 * b * c * coseno;
    resultado = Math.sqrt(b2c2 - bc);

  }
  if (b == 0)
  {
    var b2c2 = a2 + c2; //3049
    var bc = 2 * a * c * coseno;
    resultado = Math.sqrt(b2c2 - bc);

  }if (c == 0)
  {
    var b2c2 = a2 + b2; //3049
    var bc = 2 * a * b * coseno;
    resultado = Math.sqrt(b2c2 - bc);

  }


  text.innerHTML = resultado

}
