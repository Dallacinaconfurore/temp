var counter = 10;
var save_state = 0;
function change() {
  document.getElementById("first_parag").innerHTML = "sei stato javascriptato";
  window.alert("put your dick away waltuh");
}

function testing() {
  let num = 2;
  num = num ** 3;
  document.getElementById("first_parag").innerHTML = num;
}



function increase() {
    counter++;
    document.getElementById("counter").innerHTML = counter;

}
function decrease() {
    counter--;
    document.getElementById("counter").innerHTML = counter;

}
function reset(){
    counter = 0;
    document.getElementById("counter").innerHTML = counter;

}
function save(){
    save_state = counter;
    document.getElementById("counter").innerHTML = counter;

}
function load(){
    counter = save_state;
    document.getElementById("counter").innerHTML = counter;

}