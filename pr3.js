document.write("<table style='border: 1px solid black; '>");
for(let i = 1; i <= 10;i++){

	document.write("<tr>");
	for(let a = 1; a <= 10; a++){
		document.write("<td style='border: 1px solid black;'>"+a*i+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");