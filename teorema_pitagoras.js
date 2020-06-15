var cateto_1 = document.getElementById("cateto1");
var cateto_2 = document.getElementById("cateto2");
var hipotenusa = document.getElementById("hipotenusa");
var boton = document.getElementById("button");
var resultado = document.getElementById("resultado");


var canvas = document.getElementById("el_canvas");
var pro = canvas.getContext("2d");
var l = pro;


var cateto_a;
var cateto_b;
var hipotenussa;


boton.addEventListener("click", calcular);

function calcular()
{

  canvas.width=(700);
  canvas.height=(400);
  cateto_a = parseFloat(cateto_1.value);
  cateto_b = parseFloat(cateto_2.value);
  hipotenussa = parseFloat(hipotenusa.value);

  var a2 = Math.pow(cateto_a, 2);
  var b2 = Math.pow(cateto_b, 2);
  var h2 = Math.pow(hipotenussa, 2);

  if (hipotenussa == 0)
  {
    hipotenussa = Math.sqrt(a2 + b2);
    resultado.innerHTML = "Hipotenusa: " + hipotenussa;
  }
  if (cateto_a == 0)
  {
    cateto_a = Math.sqrt(h2 - b2);
    resultado.innerHTML = "Cateto a: " + cateto_a;
  }
  if (cateto_b == 0)
  {
    cateto_b = Math.sqrt(h2 - a2);
    resultado.innerHTML = "Cateto b: " + cateto_b;
  }

  if (cateto_a > cateto_b)
  {
    cafx = 299;
    cbfx = 299 - cateto_b / cateto_a * 299;
  } else if (cateto_a < cateto_b)
  {
    cbfx = 0;
    cafx = cateto_a / cateto_b * 299;
  }
  if (cateto_a == cateto_b)
  {
    cbfx = 0;
    cafx = 300;
  }

var cafx;
var cbfx;

  dl(c, 100, 299, cafx + 100, 299);
  dl(c, cafx + 100, 299, cafx + 100, cbfx);
  dl(c, cafx + 100, cbfx, 100, 299);
  l.fillText("h" , cafx - 30, 100);
  l.fillText("cateto 1" , cafx + 120, 290);
  l.fillText("cateto 2" , cafx - 20, 330);
}

var c = "black";


function dl(color, xi, yi, xf, yf)
{
l.beginPath();
l.strokeStyle = color;
l.lineWidth = 2;
l.moveTo(xi, yi);
l.lineTo(xf, yf);
l.stroke();
l.closePath();
l.font = "28px sans-serif";
}
