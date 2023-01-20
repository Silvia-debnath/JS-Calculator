function clrS()
{ 
    document.getElementById("result").value = "";

}
function display(value)
{
    document.getElementById("result").value += value;
}
function delLast()
{ var s= document.getElementById("result").value.toString();
  var str = (s.substring(0, s.length - 1)); 
document.getElementById("result").value = str; 
}
function calculate()
{
    var a= document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
function pm()
{
    var x = document.getElementById("result").value;
    var y = "(-"+x+")";
    document.getElementById("result").value = y;
}
