document.getElementById("demo1").style.color= " blue ";
var para=document.createElement("p");
var text=document.createTextNode("分明只是寻常能耐");
para.appendChild(text);

var demo=document.getElementById("demo");
    demo.appendChild(para);

function displayDate(){
    document.getElementById("demo7").innerHTML = Date();

}
