function display(){
    var one = document.getElementById("btn1");
    var output = document.getElementById("result");
    output.innerHTML=one.value;
    amount.value=null;
}
function display2(){
    var one = document.getElementById("btn2");
    var output = document.getElementById("result");
    output.innerHTML=one.value;
    amount.value=null;
}
function display3(){
    var one = document.getElementById("btn3");
    var output = document.getElementById("result");
    output.innerHTML=one.value;
    amount.value=null;
}
function display4(){
    var one = document.getElementById("btn4");
    var output = document.getElementById("result");
    output.innerHTML=one.value;
    amount.value=null;

}
function display5(){
    var one = document.getElementById("btn5");
    var output = document.getElementById("result");
    output.innerHTML=one.value;
    amount.value=null;
}
var amount = document.getElementById("Custom");
var result = document.getElementById("result")
amount.addEventListener("input", () =>{
    result.innerHTML = amount.value;
    if(amount.value<1){
        alert("Amount must be greater than 1XAF");
        amount.value=null;
        result.innerHTML=null;
    }
})