var x = document.getElementById("x");
var x2 = document.getElementById("x1");
var y = document.getElementById("y");
var y2 = document.getElementById("y2");
var resultado0 = document.getElementById("resultado0");
var resultado1 = document.getElementById("resultado1");
var boton = document.getElementById("calcular");
var boton1 = document.getElementById("calcular1");
var boton2 = document.getElementById("calcular2");
var boton3 = document.getElementById("calcular3");
var t = document.getElementById("jsjsjs");
var text = document.getElementById("text");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var l = ctx;
var valor_x;
var valor_y;

boton.addEventListener("click", calcular);
boton1.addEventListener("click", calcular1);
boton2.addEventListener("click", calcular2);
boton3.addEventListener("click", calcular3);

function calcular()
{

    canvas.width=(700);
    canvas.height=(900);

  var xx = parseFloat(x.value)
  var xx2 = parseFloat(x2.value);
  var yy = parseFloat(y.value);
  var yy2 = parseFloat(y2.value);
  var resultado = parseFloat(resultado0.value);
  var resultado2 = parseFloat(resultado1.value);

var resultado_despejado = resultado / yy;
var x_despejada = xx / yy;
var x_parte = (yy2 * ((xx * -1) / yy));
var x_total = (x_parte + xx2).toFixed(2);
var a = yy2 * resultado_despejado;
var resultado3 = resultado2 - a;
var yax = resultado3 / x_total;

valor_x = yax.toFixed(2);
var yayy = (resultado - (xx * valor_x)) / yy;
valor_y = yayy.toFixed(2);
t.innerHTML = "Valor de x: " + valor_x;
text.innerHTML = "Valor de y: " + valor_y;

l.font = "35px sans-serif";

var yys;
var yss;
var yy3 = -1 * yy;

if (yy > 0)
{
  yys = " + ";
  yss = " - ";
} else if (yy < 0)
{
  yys = " - ";
  yss = " + ";
}

var yys2;
var yss2;
if (yy2 > 0)
{
  yys2 = " + ";
  yss2 = " - ";
} else if (yy2 < 0)
{
  yys2 = " - ";
  yss2 = " + ";
}

var la_x;
var la_y;
var la_x2;
var la_y2;
var xxx;

if (xx == 1)
{
  la_x = " + x";
  xxx = "x"
} else if (xx > 1)
{
  la_x = " + " + xx.toFixed(2) + "x";
  xxx = xx.toFixed(2) + "x";
} else if (xx == -1)
{
  la_x = "- x";
  xxx = "- x";
} else if (xx < -1)
{
  la_x = "- " + (xx * -1).toFixed(2) + "x";
  xxx = "- " + (xx * -1).toFixed(2) + "x";
} else {
  la_x = "- " + (xx * -1).toFixed(2) + "x";
  xxx = "- " + (xx * -1).toFixed(2) + "x";
}



if (yy == 1)
{
  la_y = "+ y";
} else if (yy > 1)
{
  la_y = " + " + yy.toFixed(2) + "y";
} else if (yy == -1)
{
  la_y = "- y";
} else if (yy < -1)
{
  la_y = " - " + (yy * -1).toFixed(2) + "y";
}

if (yy2 == 1)
{
  la_y2 = " + y";
} else if (yy2 > 1)
{
  la_y2 = "+" + yy2.toFixed(2) + "y";
} else if (yy2 == -1)
{
  la_y2 = " - y";
} else if (yy2 < -1)
{
  la_y2 = " - " + (yy2 * -1).toFixed(2) + "y";
}

var xxx2;

if (xx2 == 1)
{
  la_x2 = " + x";
  xxx2 = "x"
} else if (xx2 > 1)
{
  la_x2 = " + " + xx2.toFixed(2) + "x";
  xxx2 = xx2.toFixed(2) + "x";
} else if (xx2 == -1)
{
  la_x2 = " - x";
  xxx2 = "- x"
} else if (xx2 < -1)
{
  la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
  xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
}
else {

    la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
    xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
}








var xxs;
var xss2;

if (xx > 0)
{
  xxs = " + ";
  xss = " - ";
} else if (xx < 0)
{
  xxs = " - ";
  xss = " + ";
}

var yys2;
var yss2;
if (yy > 0)
{
  xxs2 = " + ";
  xss2 = " - ";
} else if (x2 < 0)
{
  xxs2 = " - ";
  xss2 = " + ";
}

var xp;
var xp2;

if (x_parte == 1)
{
  xp = " + x"
} else if (x_parte > 0)
{
  xp = " + " + x_parte.toFixed(2) + "x";
} else if (x_parte == -1)
{
  xp = " - x";
} else if (x_parte < -1)
{
  xp = " - " + (-1 * x_parte).toFixed(2);
}
if (x_total == 1)
{
  xp2 = "x"
} else if (x_total > 1)
{
  xp2 = (x_total * 1).toFixed(2) + "x";
} else if (x_total == -1)
{
  xp2 = " - x"
} else if (x_total < 0)
{
  xp2 = " - " + (-1 * x_total).toFixed(2);
}

//aqui

var a2;

if (a < 0)
{
  a2 = " - " + (-1 * a).toFixed(2);
} else if (a > 0)
{
  a2 = " + " + a.toFixed(2);
}

var a_su;

if (a < 0)
{
  a_su = " + " + (-1 * a).toFixed(2);
} else if (a > 0)
{
  a_su = " - " + a.toFixed(2)
}

var xz = (xx * -1);
var xzz;
var xy;
var xzzz = (xz / yy);
if (xz == 1)
{
  xzz = "+ x";
} else if (xz == -1)
{
  xzz = "- x";
} else if (xz > 1)
{
  xzz = " + " + xz.toFixed(2) + "x";
} else if (xz < -1)
{
  xzz = " - " + (xz * -1).toFixed(2) + "x";
}

if (xzzz == 1)
{
  xy = "+ x";
} else if (xzzz == -1)
{
  xy = "- x";
} else if (xzzz >= 0)
{
  xy = " + " + xzzz.toFixed(2) + "x";
}
else if (xzzz < 0)
{
  xy = " - " + (xzzz * -1).toFixed(2) + "x";
}

var yyy;
if (yy2 > 0)
{
  yyy = " + " + yy2.toFixed(2);
} else if (yy2 < 0)
{
  yyy = " - " + (yy2 * -1).toFixed(2);
}



l.fillText(xxx + la_y + " = " + resultado0.value, 1, 100);
l.fillText(xxx2 + la_y2 + " = " + resultado1.value, 1, 150);

l.fillText(la_y + " = " + resultado + "" + xzz , 1, 250);
l.fillText("y = " + resultado + xzz + " / " + yy, 1, 300);

l.fillText(xxx2 + yyy + "(" + resultado_despejado + xy + ")" + " = " + resultado2, 1, 350);

l.fillText(xxx2 + a2 + xp + " = " + resultado2, 1, 400);
l.fillText(xp2 + " = " + resultado2 + a_su, 1, 450);

l.fillText("x" + " = " + resultado3 + "/" + x_total, 1, 500);
l.fillText("x" + " = " + valor_x, 1, 550);

l.fillText(xx + "(" + valor_x + ")" + la_y + " = " + resultado0.value, 1, 650);
l.fillText(xx * valor_x + la_y + " = " + resultado0.value, 1, 700);
l.fillText(la_y + " = " + resultado0.value +" " + (-1 * (xx * valor_x)), 1, 750);
l.fillText("y = " + (resultado - (xx * valor_x)) + " / " + yy, 1, 800);
l.fillText("y = " + valor_y, 1, 850);
}

function calcular1()
{

    canvas.width=(700);
    canvas.height=(900);

  var xx = parseFloat(x.value)
  var xx2 = parseFloat(x2.value);
  var yy = parseFloat(y.value);
  var yy2 = parseFloat(y2.value);
  var resultado = parseFloat(resultado0.value);
  var resultado2 = parseFloat(resultado1.value);
  var total_x;
  var resultado_total;
  var xxxx;
  var xxxx2;


  if (yy < 0)
  {
    if (yy2 > 0)
    {
      la_yy = yy * -1;
      la_yy2 = yy2;
      xxxx = (xx * yy2);
      xxxx2 = (xx2 * (yy * -1));
      total_x = (xx * yy2) + (xx2 * (yy * -1));
      resultado_total = (resultado * yy2) + (resultado2 * (yy * -1));
      valor_x = resultado_total / total_x;
      valor_y = (resultado - (xx * valor_x)) / yy;
    }
    else if (yy2 < 0)
    {
      la_yy = yy;
      la_yy2 = yy2 * -1;
      xxxx = (xx * (yy2 * -1));
      xxxx2 = (xx2 * (yy));
        total_x = (xx * (yy2 * -1)) + (xx2 * (yy));
        resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
        valor_x = resultado_total / total_x;
        valor_y = (resultado - (xx * valor_x)) / yy;
    }
  }
  else if (yy > 0)
  {
    if (yy2 > 0)
    {
      la_yy = yy * -1;
      la_yy2 = yy2;
      xxxx = (xx * (yy2 * -1));
      xxxx2 = (xx2 * (yy));
      total_x = (xx * (yy2 * -1)) + (xx2 * (yy));
      resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
      valor_x = resultado_total / total_x;
      valor_y = (resultado - (xx * valor_x)) / yy;
    }
    else if (yy2 < 0)
    {
      la_yy = yy;
      la_yy2 = yy2 * -1;
      xxxx = (xx * (yy2 * -1));
      xxxx2 = (xx2 * (yy ));
      total_x = (xx * (yy2 * -1)) + (xx2 * (yy ));
      resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
      valor_x = resultado_total / total_x;
      valor_y = (resultado - (xx * valor_x)) / yy;
    }
  }


  var la_x;
  var la_y;
  var la_x2;
  var la_y2;
  var xxx;

  if (xx == 1)
  {
    la_x = " + x";
    xxx = "x"
  } else if (xx > 1)
  {
    la_x = " + " + xx.toFixed(2) + "x";
    xxx = xx.toFixed(2) + "x";
  } else if (xx == -1)
  {
    la_x = "- x";
    xxx = "- x";
  } else if (xx < -1)
  {
    la_x = "- " + (xx * -1).toFixed(2) + "x";
    xxx = "- " + (xx * -1).toFixed(2) + "x";
  } else {
    la_x = "- " + (xx * -1).toFixed(2) + "x";
    xxx = "- " + (xx * -1).toFixed(2) + "x";
  }



  if (yy == 1)
  {
    la_y = " + y";
  } else if (yy > 1)
  {
    la_y = " + " + yy.toFixed(2) + "y";
  } else if (yy == -1)
  {
    la_y = " - y";
  } else if (yy < -1)
  {
    la_y = " - " + (yy * -1).toFixed(2) + "y";
  }

  if (yy2 == 1)
  {
    la_y2 = " + y";
  } else if (yy2 > 1)
  {
    la_y2 = " + " + yy2.toFixed(2) + "y";
  } else if (yy2 == -1)
  {
    la_y2 = " - y";
  } else if (yy2 < -1)
  {
    la_y2 = " - " + (yy2 * -1).toFixed(2) + "y";
  }

  var xxx2;

  if (xx2 == 1)
  {
    la_x2 = " + x";
    xxx2 = "x"
  } else if (xx2 > 1)
  {
    la_x2 = " + " + xx2.toFixed(2) + "x";
    xxx2 = xx2.toFixed(2) + "x";
  } else if (xx2 == -1)
  {
    la_x2 = " - x";
    xxx2 = "- x"
  } else if (xx2 < -1)
  {
    la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
    xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
  }
  else {

      la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
      xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
  }


  if (xx == 1)
  {
    la_x = " + x";
    xxx = "x"
  } else if (xx > 1)
  {
    la_x = " + " + xx.toFixed(2) + "x";
    xxx = xx.toFixed(2) + "x";
  } else if (xx == -1)
  {
    la_x = "- x";
    xxx = "- x";
  } else if (xx < -1)
  {
    la_x = "- " + (xx * -1).toFixed(2) + "x";
    xxx = "- " + (xx * -1).toFixed(2) + "x";
  } else {
    la_x = "- " + (xx * -1).toFixed(2) + "x";
    xxx = "- " + (xx * -1).toFixed(2) + "x";
  }

var x1x;
var x2x;

  if (xxxx2 == 1)
  {
    x2x = "x";
  } else if (xxxx2 > 1)
  {
    x2x = xxxx2.toFixed(2) + "x";
  } else if (xxxx2 == -1)
  {
    x2x = " - x";
  } else if (xxxx2 < -1)
  {
    x2x = " - " + (xxxx2 * -1).toFixed(2) + "x";
  }

  if (xxxx == 1)
  {
    x1x = "x";
  } else if (xxxx > 1)
  {
    x1x = xxxx.toFixed(2) + "x";
  } else if (xxxx == -1)
  {
    x1x = " - x";
  } else if (xxxx < -1)
  {
    x1x = " - " + (xxxx * -1).toFixed(2) + "x";
  }

var yyy2 = la_yy * yy2;
var yyy = la_yy2 * yy;
var la_yyy;
var la_yyy2;
  if (yyy == 1)
  {
    la_yyy = " + y";
  } else if (yyy > 1)
  {
    la_yyy = " + " + yy.toFixed(2) + "y";
  } else if (yyy == -1)
  {
    la_yyy = " - y";
  } else if (yyy < -1)
  {
    la_yyy = " - " + (yyy * -1).toFixed(2) + "y";
  }

  if (yyy2 == 1)
  {
    la_yyy2 = " + y";
  } else if (yyy2 > 1)
  {
    la_yyy2 = " + " + yy2.toFixed(2) + "y";
  } else if (yyy2 == -1)
  {
    la_yyy2 = " - y";
  } else if (yyy2 < -1)
  {
    la_yyy2 = " - " + (yyy2 * -1).toFixed(2) + "y";
  }

  t.innerHTML = "Valor de x: " + valor_x;
  text.innerHTML = "Valor de y: " + valor_y;

  l.font = "35px sans-serif";

  l.fillText(la_yy2 + "(" + xxx + la_y + " = " + resultado + ")", 1, 100);
  l.fillText(la_yy + "(" + xxx2 + la_y2 + " = " + resultado2 + ")", 1, 150);

  l.fillText(x1x + la_yyy + " = " + (resultado * la_yy2), 1, 250);
  l.fillText(x2x + la_yyy2 + " = " + (resultado2 * la_yy), 1, 300);

  l.fillText(total_x + "x" + " = " + resultado_total, 1, 400);
  l.fillText("x = " + resultado_total + " / " + total_x, 1, 450);
  l.fillText("x = " + valor_x, 1, 500);

  l.fillText(xx + "(" + valor_x + ")" + la_y + " = " + resultado, 1, 600);
  l.fillText((xx * valor_x) + la_y + " = " + resultado, 1, 650);
  l.fillText(la_y + " = " + (resultado - (xx * valor_x)), 1, 700);
  l.fillText("y = " + valor_y, 1, 750);
}

function calcular2()
{

      canvas.width=(700);
      canvas.height=(300);
  var xx = parseFloat(x.value)
  var xx2 = parseFloat(x2.value);
  var yy = parseFloat(y.value);
  var yy2 = parseFloat(y2.value);
  var resultado = parseFloat(resultado0.value);
  var resultado2 = parseFloat(resultado1.value);
  var la_y;
  var la_y2;
  var yyy;
  var yyy2;
  var y1y = xx2 * (yy * -1);
  var y2y = xx * (yy2 * -1);
  var yy1y;
  var yy2y;

    if (yy == 1)
    {
      la_y = " + y";
      yyy = " - y"
    } else if (yy > 1)
    {
      la_y = " + " + yy.toFixed(2) + "y";
      yyy = " - " + yy.toFixed(2) + "y";
    } else if (yy == -1)
    {
      la_y = " - y";
      yyy = " + y";
    } else if (yy < -1)
    {
      la_y = " - " + (yy * -1).toFixed(2) + "y";
      yyy = " + " + (yy * -1).toFixed(2) + "y";
    }

    if (yy2 == 1)
    {
      la_y2 = " + y";
      yyy2 = " - y"
    } else if (yy2 > 1)
    {
      la_y2 = " + " + yy2.toFixed(2) + "y";
      yyy2 = " - " + yy2.toFixed(2) + "y";
    } else if (yy2 == -1)
    {
      la_y2 = " - y";
      yyy2 = " + y";
    } else if (yy2 < -1)
    {
      la_y2 = " - " + (yy2 * -1).toFixed(2) + "y";
      yyy2 = " + " + (yy2 * -1).toFixed(2) + "y";
    }
    if (yy < 0)
    {
      if (yy2 > 0)
      {
        la_yy = yy * -1;
        la_yy2 = yy2;
        xxxx = (xx * yy2);
        xxxx2 = (xx2 * (yy * -1));
        total_x = (xx * yy2) + (xx2 * (yy * -1));
        resultado_total = (resultado * yy2) + (resultado2 * (yy * -1));
        valor_x = resultado_total / total_x;
        valor_y = (resultado - (xx * valor_x)) / yy;
      }
      else if (yy2 < 0)
      {
        la_yy = yy;
        la_yy2 = yy2 * -1;
        xxxx = (xx * (yy2 * -1));
        xxxx2 = (xx2 * (yy));
          total_x = (xx * (yy2 * -1)) + (xx2 * (yy));
          resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
          valor_x = resultado_total / total_x;
          valor_y = (resultado - (xx * valor_x)) / yy;
      }
    }
    else if (yy > 0)
    {
      if (yy2 > 0)
      {
        la_yy = yy * -1;
        la_yy2 = yy2;
        xxxx = (xx * (yy2 * -1));
        xxxx2 = (xx2 * (yy));
        total_x = (xx * (yy2 * -1)) + (xx2 * (yy));
        resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
        valor_x = resultado_total / total_x;
        valor_y = (resultado - (xx * valor_x)) / yy;
      }
      else if (yy2 < 0)
      {
        la_yy = yy;
        la_yy2 = yy2 * -1;
        xxxx = (xx * (yy2 * -1));
        xxxx2 = (xx2 * (yy ));
        total_x = (xx * (yy2 * -1)) + (xx2 * (yy ));
        resultado_total = (resultado * (yy2 * -1)) + (resultado2 * (yy));
        valor_x = resultado_total / total_x;
        valor_y = (resultado - (xx * valor_x)) / yy;
      }
    }

    var xxx2;

    if (xx2 == 1)
    {
      la_x2 = " + x";
      xxx2 = "x"
    } else if (xx2 > 1)
    {
      la_x2 = " + " + xx2.toFixed(2) + "x";
      xxx2 = xx2.toFixed(2) + "x";
    } else if (xx2 == -1)
    {
      la_x2 = " - x";
      xxx2 = "- x"
    } else if (xx2 < -1)
    {
      la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
      xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
    }
    else {

        la_x2 = " - " + (xx2 * -1).toFixed(2) + "x";
        xxx2 = " - " + (xx2 * -1).toFixed(2) + "x";
    }


    if (xx == 1)
    {
      la_x = " + x";
      xxx = "x"
    } else if (xx > 1)
    {
      la_x = " + " + xx.toFixed(2) + "x";
      xxx = xx.toFixed(2) + "x";
    } else if (xx == -1)
    {
      la_x = "- x";
      xxx = "- x";
    } else if (xx < -1)
    {
      la_x = "- " + (xx * -1).toFixed(2) + "x";
      xxx = "- " + (xx * -1).toFixed(2) + "x";
    } else {
      la_x = "- " + (xx * -1).toFixed(2) + "x";
      xxx = "- " + (xx * -1).toFixed(2) + "x";
    }
    t.innerHTML = "Valor de x: " + valor_x;
    text.innerHTML = "Valor de y: " + valor_y;

    l.font = "35px sans-serif";


    if (y1y == 1)
    {
      yy1y = " + y";
      y1yy = " - y";
    } else if (y1y > 1)
    {
      yy1y = " + " + y1y.toFixed(2) + "y";
      y1yy = " - " + y1y.toFixed(2) + "y";
    } else if (y1y == -1)
    {
      yy1y = " - y";
      y1yy = " + y";
    } else if (y1y < -1)
    {
      yy1y = " - " + (y1y * -1).toFixed(2) + "y";
      y1yy = " + " + (y1y * -1).toFixed(2) + "y";
    }

    if (y2y == 1)
    {
      yy2y = " + y";
    } else if (y2y > 1)
    {
      yy2y = " + " + y2y.toFixed(2) + "y";
    } else if (y2y == -1)
    {
      yy2y = " - y";
    } else if (y2y < -1)
    {
      yy2y = " - " + (y2y * -1).toFixed(2) + "y";
    }

var y_u = (xx2 * yy) + (-1 * (yy2 * xx));
var y_ul;


    if (y_u == 1)
    {
      y_ul = " + y";
    } else if (y_u > 1)
    {
      y_ul = " + " + y_u.toFixed(2) + "y";
    } else if (y_u == -1)
    {
      y_ul = " - y";
    } else if (y_u < -1)
    {
      y_ul = " - " + (y_u * -1).toFixed(2) + "y";
    }

    var result = (xx2 * resultado) + (-1 * (xx * resultado2));

var signo;

if (yy < 0)
{
  signo = " - ";
} else if (yy > 0)
{
  signo = " + ";
}


    l.fillText(xxx + la_y + " = " + resultado, 1, 100);
    l.fillText(xxx2 + la_y2 + " = " + resultado2, 1, 150);

    l.fillText("x = " + resultado + yyy + " / " + xx, 1, 250);
    l.fillText("x = " + resultado2 + yyy2 + " / " + xx2, 1, 300);

    l.fillText(resultado + yyy + " / " + xx + " = " + resultado2 + yyy2 + " / " + xx2, 1, 400);
    l.fillText(xx2 + "(" + resultado + yyy + ")" + " = " + xx + "(" + resultado2 + yyy2 + ")", 1, 450);
    l.fillText((xx2 * resultado) + yy1y + " = " + (xx * resultado2) + yy2y, 1, 500);
    l.fillText((xx2 * resultado) + (-1 * (xx * resultado2)) + " = " + yy2y + y1yy, 1, 550);
    l.fillText(y_ul + " = " + result, 1, 600);
    l.fillText("y = " + result + " / " + y_ul, 1, 650);
    l.fillText("y = " + valor_y, 1, 700);

    l.fillText(xxx + signo + yy + "(" + valor_y + ")" + " = " + resultado, 1, 800);
    l.fillText(xxx + " = " + (resultado - (yy * valor_y)), 1, 850);
    l.fillText("x = " + (resultado - (yy * valor_y)) + " / " + xx, 1, 900);
    l.fillText("x = " + valor_x, 1, 950);
}


function calcular3()
{
  canvas.width=(700);
  canvas.height=(1000);
  l.font = "35px sans-serif";
  var xx = parseFloat(x.value)
  var xx2 = parseFloat(x2.value);
  var yy = parseFloat(y.value);
  var yy2 = parseFloat(y2.value);
  var resultado = parseFloat(resultado0.value);
  var resultado2 = parseFloat(resultado1.value);

  var delta = (xx * yy2) - (yy * xx2);
  var delta_x = (resultado * yy2) - (yy * resultado2);
  var delta_y = (xx * resultado2) - (resultado * xx2);

  valor_x = (delta_x / delta).toFixed(2);
  valor_y = (delta_y / delta).toFixed(2);

t.innerHTML = "Valor de x: " + valor_x;
text.innerHTML = "Valor de y: " + valor_y;

l.fillText("Delta = " + "(" + xx + ")" + "(" + yy2 + ")" + " - " + "(" + yy + ")" + "(" + xx2 + ")" + " = " + (xx * yy2) + " - " + (yy* xx2) + " = " + delta, 1, 100);
l.fillText("Delta x = " + "(" + resultado + ")" + "(" + yy2 + ")" + " - " + "(" + yy + ")" + "(" + resultado2 + ")" + " = " + (resultado * yy2) + " - " + (resultado2 * yy) + " = " + delta_x, 1, 150);
l.fillText("Delta y = " + "(" + xx + ")" + "(" + resultado2 + ")" + " - " + "(" + resultado + ")" + "(" + xx2 + ")" + " = " + (xx * resultado2) + " - " + (resultado * xx2) + " = " + delta_y, 1, 200);
l.fillText("x = " + "delta x / delta" + " = " + delta_x + " / " + delta + " = " + valor_x, 1, 250);
l.fillText("y = " + "delta y / delta" + " = " + delta_y + " / " + delta + " = " + valor_y, 1, 300);
}
