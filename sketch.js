var btn_red,btn_yellow,btn_blue,btn_cyan,btn_teal,btn_olive,btn_lavender;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_red = createButton("RED");
  btn_red.position(50,50);
  btn_red.mousePressed(r_bg);

btn_yellow = createButton("YELLOW");
  btn_yellow.position(250,50);
  btn_yellow.mousePressed(y_bg);
  
btn_lavender = createButton("LAVENDER");
  btn_lavender.position(50,100);
  btn_lavender.mousePressed(l_bg);

btn_olive = createButton("OLIVE");
  btn_olive.position(250,100);
  btn_olive.mousePressed(o_bg);

btn_blue = createButton("BLUE");
  btn_blue.position(50,150);
  btn_blue.mousePressed(b_bg);

btn_teal = createButton("TEAL");
  btn_teal.position(250,150);
  btn_teal.mousePressed(t_bg);

btn_cyan = createButton("CYAN");
  btn_cyan.position(50,200);
  btn_cyan.mousePressed(c_bg);
  
  btn_green = createButton("GREEN");
  btn_green.position(250,200);
  btn_green.mousePressed(g_bg);
  
}

function draw() {
  background(r,g,b);
}


function r_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function g_bg()
{
  r = 0;
  g = 255;
  b =0;
}
function y_bg()
{
  r = 255;
  g = 255;
  b =0;
}
function l_bg()
{
  r = 229;
  g = 204;
  b =255;
}
function t_bg()
{
  r = 0;
  g = 128;
  b =128;
}
function o_bg()
{
  r = 128;
  g = 128;
  b =0;
}
function c_bg()
{
  r = 0;
  g = 255;
  b =255;
}
function g_bg()
{
  r = 0;
  g = 255;
  b =0;
}
function b_bg()
{
  r = 0;
  g = 0;
  b =255;
}