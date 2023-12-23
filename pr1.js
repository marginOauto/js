let num = Math.floor(Math.random() * 100);
let num2 = 0;
let steps = 0;
while(num2 != num){
	steps++;
num2 = +prompt("вгадайте число від 1 до 100", "")
if(!num2)break;
else if(num2 > num) alert("ваше число більше");
else if(num2 < num) alert("ваше число менше");
if(steps > 8)break;
}


if(!num2){
alert("ви вийшли з гри");
}
else if(steps > 8){
	alert("ви вичерпали всі спроби")
}
else{
	alert("Вітаю! Ви вгадали число "+ num);
	alert('кількість шагів: '+ steps);
}