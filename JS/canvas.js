//инициализация
/* инициализация
	параметров
 */
 

var w=c.width=window.innerWidth,
h=c.height=window.innerHeight,
ctx=c.getContext("2d"),

total=w,
accelleration=.05,
//преварительный расчет
size=w/total,
occupation=w/total,
repaintColor='rgba(255,255,255,.04)',
colors=[],
dots=[],
dotsVel=[];
//установка оттенка и уровня для всех точек
var portion=360/total;
for(var i=0;i<total;++i)
{
	colors[i]=portion*i;
	dots[i]=h;
	dotsVel[i]=10;
}
//рабочая функция
function anim()
{
	//console.log("anim()");
	window.requestAnimationFrame(anim);
	
	  ctx.fillStyle = repaintColor;
	  ctx.fillRect(0, 0, w, h);
	  
	  for(var i = 0; i < total; ++i){
		var currentY = dots[i] - 1;
		dots[i] += dotsVel[i] += accelleration;
		
		ctx.fillStyle = 'hsl('+ colors[i] + ', 80%, 50%)';
		ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);
		
		if(dots[i] > h && Math.random() < .01){
		  dots[i] = dotsVel[i] = 0;
		}
	  }
		
} 

anim();

