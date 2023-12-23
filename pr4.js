let salaries = {
  "Василь": 10000,
  "Петро": 30000,
  "Дарина": 25000
};
let zarp = 0;
let name;
let name2;
let zarp2
for (let key in salaries) {
  if(zarp < salaries[key]){
    name = key;
    zarp = salaries[key]

  }
  name2 = key;
  zarp2 = salaries[key];
  document.write('<p style="background: linear-gradient(90deg, #e933ff, #ffb400, #ff3333, #334dff, #e933ff);background-clip: text; -webkit-background-clip: text;  -webkit-text-fill-color: transparent; animation: textflow 5s linear infinite;">');
  document.write("Ім'я: "+ name2+ ", Заробітня плата: "+ zarp2+ '</br>');
  	document.write("</p>");
}
  document.write('<p style=" font-size:30px; background: linear-gradient(90deg, #e933ff, #ffb400, #ff3333, #334dff, #e933ff);background-clip: text; -webkit-background-clip: text;  -webkit-text-fill-color: transparent; animation: textflow 5s linear infinite;">');

document.write("Найбільша Заробітня плата: "+ name + ".");
document.write("</p>");