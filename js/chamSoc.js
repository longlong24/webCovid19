
var count = 0;
function move() {
    process1();
}
function process1() {
  var elem3 = document.getElementById("pro3");
  var elem1 = document.getElementById("pro1");
  var width1 = 0;
  var pro1_id = setInterval(frame1, 35);
  function frame1() {
    if(width1 >= 100){
      clearInterval(pro1_id);
      process2();
    } 
    else {
      elem3.disabled = true;
      width1++;
      elem1.style.width = width1 + '%';
    }
  }

}

function process2() {
  var elem3 = document.getElementById("pro3");
  var elem2 = document.getElementById("pro2");
  var countnumb = document.getElementById("check-numb");
  var width2 = 100;
  var pro2_id = setInterval(frame2, 40);
  function frame2() {
    if(width2 == 0) {
      countnumb.innerHTML = ++count;
      elem3.disabled = false;
      clearInterval(pro2_id);
    }
    else {
      width2--;
      elem2.style.width = width2 + '%';
    }
  }
}

