var sena = document.getElementById("sena");
var senb = document.getElementById("senb");
var a = document.getElementById("a");
var b = document.getElementById("b");
var boton = document.getElementById("calcular");
var t = document.getElementById("text");
var t2 = document.getElementById("text2")
var resultado;

var sen_a;
var sen_b;
var a1;
var b1;



boton.addEventListener("click", calc);

function calc()
{
  sen_a = parseFloat(sena.value);
  sen_b = parseFloat(senb.value);
  a1 = parseFloat(a.value);
  b1 = parseFloat(b.value);
var seno_b = Math.sin(sen_b * 0.0174533 / 1.00000042858);
var seno_a = Math.sin(sen_a * 0.0174533 / 1.00000042858);


  if(sen_a == 0)
  {
    resultado = (a1 * seno_b) / b1;
    t2.innerHTML = "arco seno: " + (Math.asin(resultado) * 57.2958);
  }
  if (a1 == 0) {
    resultado = b1 * seno_a / seno_b
  }
  if (b1 == 0) {
    resultado = a1 * seno_a / seno_b
  }
  if(sen_b == 0)
  {
    resultado = (a1 * seno_a) / b1;
    t2.innerHTML = "arco seno: " + (Math.asin(resultado) * 57.2958);
  }


text.innerHTML = resultado
}
